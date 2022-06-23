let form = document.querySelector("form")
let searchBtn = document.getElementById("btn-search")

document.addEventListener("DOMContentLoaded",() =>{
    
    //form.addEventListener("submit",(e)=>{
        //\alert(4)
       // e.preventDefault();
        //renderMeals(e.target['search-input'].value);
        //form.reset();

  //  })
  searchBtn.addEventListener("click", getMeals)
  //alert(4)
})
 
   
 function getMeals(){
     let searchInput = document.getElementById("search-input").value;
    
    
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
        
  
    .then(resp => resp.json())
    .then(data=> {
        console.log(data)

     let mealContainer = document.querySelector("#results")
     let data1=""
     data.meals.forEach(meal => {
         data1 +=  ` <div data-id="${meal.idMeal}"  class = "meal-item">
         <div class= "meal-image">
       
         <img src="${meal.strMealThumb}" class="img-rounded" id="image"> </div>
          <div class="meal-name">  
         <h3> ${meal.strMeal} </h3> 
          <button type="button" id="button" class= "btn btn-primary"> Get Recipe </button>
          </div>
          </div>
          `
         
     })
     mealContainer.innerHTML = data1; 
     })
    }
    getMeals();

