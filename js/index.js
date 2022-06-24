let form = document.querySelector("form")
let searchBtn = document.getElementById("btn-search")
let mealItems =[];

document.addEventListener("DOMContentLoaded",() =>{
    
    form.addEventListener("submit",(e)=>{
      
       e.preventDefault();
        const value = e.target.querySelector('input').value;
        findMeals();
       
   })
  searchBtn.addEventListener("click", findMeals)
 
  //alert(4)
})
    function findMeals(data){
        let searchInput = document.getElementById("search-input").value.trim();
    
    
    
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
            
      
        .then(resp => resp.json())
        .then(data=>{
            console.log(data)
     

      

     let mealContainer = document.querySelector("#meals-container")
     let data1=""
     if(data.meals){
     data.meals.forEach(meal => {
         data1 +=  ` <div data-id="${meal.idMeal}"  class = "meal-item">
         <div class= "meal-image">
       
         <img src="${meal.strMealThumb}" class="img-rounded" id="image"> </div>
          <div class="meal-name">  
         <h3> ${meal.strMeal} </h3> 
          <button type="button" id="button" class= "btn btn-primary recipe"> Get Recipe </button>
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
        if(e.target.classList.contains('recipe')){
         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response=> response.json())
        .then(data=>{
            return mealRecipe(data.meals)
            //console.log(data.meals)

        })
    }

    }
    function getRecipeMeals(meal){
        console.log(meal);
        let data1="";
        data1 += `<h2 class = "recipe-title">${meal.strMeal}</h2>
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
        </div>`

    }


