    let form = document.querySelector("form")
    let searchBtn = document.getElementById("btn-search")
    let mealContainer = document.querySelector("#meals-container")
    let mealContent = document.getElementById("content")
    let searchRecipe = document.getElementById("recipe-up-btn")
    let searchMeals = document.getElementById("recipe-btn")
    let mealResult = document.getElementById("results")
    let countLikes = document.getElementById("like-count")
    let likeButton = document.getElementById("like-button")
    


    document.addEventListener("DOMContentLoaded",() =>{
    
        form.addEventListener("submit",(e)=>{
        
         e.preventDefault();
            const value = e.target.querySelector('input').value;
            findMeals();
        
   })
        searchBtn.addEventListener("click", findMeals)
        mealContainer.addEventListener('click',getRecipe)
        searchRecipe.addEventListener("click",(e) => {
        mealContent.parentElement.classList.remove('showRecipe');
        likeButton.addEventListener('click', () => {
            let integer = 0;
            integer += 1
            countLikes.innerHTML = `${integer} likes`;
            
       })
        
  
        

  
    })
  
})
         function findMeals(data){
            let searchInput = document.getElementById("search-input").value.trim();
        
        
        
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
                
        
            .then(resp => resp.json())
            .then(data=>{
                //console.log(data)
        

      

     
         let data1=""
         if(data.meals){
         data.meals.forEach(meal => {
            data1 +=  ` <div data-id="${meal.idMeal}"  class = "meal-item">
                                <div class= "meal-image">
                            
                             <img src="${meal.strMealThumb}" class="img-rounded" id="image"> </div>
                             <div class="meal-name">  
                             <h3> ${meal.strMeal} </h3> 
                                <a class = "recipe-btn">Get Recipe</a>
                                
                                
                                
                                </div>
                            </div>
                                `
            
        })
                       mealContainer.classList.remove('not-found');
    }
                else{
                    data1 = "Results not found!"
                    mealContainer.classList.add('not-found');
                }
                mealContainer.innerHTML = data1; 
                })
 
    }

                    findMeals();

                        function getRecipe(e){
                            e.preventDefault();
                            if(e.target.classList.contains('recipe-btn')){
                                let mealItem = e.target.parentElement.parentElement;
                            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
                            .then(response=> response.json())
                            .then(data=> {
                            // console.log(data)
                            return getRecipeMeals(data.meals)

                            })
                                
            
            

      
    }

}
                        function getRecipeMeals(meal){
                            console.log(meal);
                            meal = meal[0];
                            let data1="";
                            data1 = `<h2 class = "recipe-title">${meal.strMeal}</h2>
                            <p class = "recipe-category">${meal.strCategory}</p>
                            <div class = "recipe-instruct">
                                <h3>Instructions:</h3>
                                <p>${meal.strInstructions}</p>
                            </div>
                            <div class = "recipe-meal-img">
                                <img src = "${meal.strMealThumb}" alt = "">
                            </div>
                            <div class = "recipe-link">
                                <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
                            </div>
                            <div id="like-section">
                        <span id="like-count">0 likes </span>
                        <button id="like-button"> ♡ </button>
                    </div>
                            `
                           
                            mealContent.innerHTML=data1;
                            mealContent.parentElement.classList.add('showRecipe');
                           


    }


