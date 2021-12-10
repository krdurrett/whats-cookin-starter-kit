import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import { recipeData } from './data/recipes';
import { ingredientsData } from './data/ingredients';

//Query Selectors
const allRecipesButton = document.querySelector('#allRecipesButton');
const recipeCardSection = document.querySelector('#recipeCardSection');

//Global variables
let recipeRepository;

//Funtions
const instantiateRecipeRepository = () => {
  new RecipeRepository(recipeData, ingredientsData);
}


const displayAllRecipes = () => {
  recipeCardSection.innerHTML = `
  <section class="recipe-card">
    <img class="recipe-card-img" src="https://spoonacular.com/recipeImages/595736-556x370.jpg">
    <button>Recipe Name</button>
    <div class="recipe-card-buttons">
      <button>🥘</button>
      <button>❤️</button>
    </div>
  </section>`;
}

console.log('Hello world');

//Event Listeners
window.addEventListener('load', instantiateRecipeRepository);
allRecipesButton.addEventListener('click', displayAllRecipes)
