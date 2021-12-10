import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';

//Query Selectors
const allRecipesButton = document.querySelector('#allRecipesButton');
const recipeCardSection = document.querySelector('#recipeCardSection');
const landingPageView = document.querySelector('#landingPageView');
const recipeDisplayView = document.querySelector('#recipeDisplayView');
const heading = document.querySelector('#heading');
const recipeDetailsView = document.querySelector('#recipeDetailsView');
//Global variables
let recipeRepository;

//Funtions
const addHidden = elements => {
  elements.forEach(item => {
    item.classList.add("hidden");
  })
}

const removeHidden = elements => {
  elements.forEach(item => {
    item.classList.remove("hidden");
  })
}

const instantiateRecipeRepository = () => {
  recipeRepository = new RecipeRepository(recipeData, ingredientsData);
}



const displayAllRecipes = () => {
  addHidden([landingPageView]);
  removeHidden([recipeDisplayView]);
  heading.innerText = 'All Recipes'
  recipeCardSection.innerHTML = ``;
  recipeRepository.recipes.forEach(recipe => {
    recipeCardSection.innerHTML += `
    <section class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <button id="${recipe.id}" >${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button>🥘</button>
        <button>❤️</button>
      </div>
    </section>`;
  })
}

const showRecipeDetails = (event) => {
  addHidden([recipeDisplayView]);
  removeHidden([recipeDetailsView]);
  recipeRepository.recipe.forEach(recipe => {
    if(event.target.id === recipe.id) {
      recipeDetailsView.innerHTML = `
      <section class="recipe-header">
        <span>${recipe.name}</span>
        <span>Recipe Cost</span>
        <div class="recipe-detail-buttons">
          <button>🥘</button>
          <button>❤️</button>
        </div>
      </section>
      <div class= "recipe-details">
        <section class="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>beans</li>
          </ul>
        </section>
        <section class="instructions">
          <h2>Instructions</h2>
          <ol>
            <li>mix beans</li>
          </ol>
        </section>
      </div>`
    }
  }

  )
}

//Event Listeners
window.addEventListener('load', instantiateRecipeRepository);
allRecipesButton.addEventListener('click', displayAllRecipes);
recipeCardSection.addEventListener('click', event => {
  showRecipeDetails(event));
