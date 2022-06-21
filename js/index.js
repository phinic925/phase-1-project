document.addEventListener("DOMContentLoaded",() =>{
    let form = document.querySelector("form")
    form.addEventListener("submit",(e)=>{
        //\alert(4)
        e.preventDefault();
        (e.target['search-input'].value);
        form.reset();

    })
})
 function fetchData(){
     fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=egg")
        
  
     .then(resp => resp.json())
     .then(data=> console.log(data))
 }
 fetchData();
