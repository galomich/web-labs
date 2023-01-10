fetch("https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=48b82c87e69c4dada21ed162482b6b1a&number=9") 
  .then(response => response.json()) 
  .then(data => { 
    console.log(data); 
    displayData(data.results); 
  }) 
  .catch(error => console.log(error)); 
 
// Display data on HTML 
function displayData(recipes) { 
  const container = document.querySelector(".table-grid"); 
 
  recipes.forEach(recipe => { 
    const recipeItem = `
    <div class="item item1">
    <a href="recipe1.html">
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" />
    </a>
  </div>`;
    document.querySelector(".table-grid").innerHTML += recipeItem;
  }); 
}