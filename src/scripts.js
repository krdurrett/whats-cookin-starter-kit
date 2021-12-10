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
      <button class="recipe-name-button" id="${recipe.id}" >${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button>🥘</button>
        <button>❤️</button>
      </div>
    </section>`;
  })
}

const showRecipeDetails = (event) => {
  if(event.target.classList.contains('recipe-name-button')){
    addHidden([recipeDisplayView]);
    removeHidden([recipeDetailsView]);
    recipeRepository.recipes.forEach(recipe => {
      if(event.target.id === recipe.id.toString()) {
        const selectedRecipe = new Recipe(recipe, ingredientsData);
        recipeDetailsView.innerHTML = `
        <section class="recipe-header" id="recipeHeader">
          <span>${recipe.name}</span>
          <span>${selectedRecipe.getRecipeCost()}</span>
          <div class="recipe-detail-buttons">
            <button>🥘</button>
            <button>❤️</button>
          </div>
        </section>
        <div class= "recipe-details">
          <section class="ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>${selectedRecipe.getIngredientNames()}</li>
            </ul>
          </section>
          <section class="instructions">
            <h2>Instructions</h2>
            <ol>
              <li>${selectedRecipe.getRecipeInstructions()}</li>
            </ol>
          </section>
        </div>`
        document.getElementById('recipeHeader').style.backgroundImage = `url(${recipe.image})`
      }
    })
  }
}

//Event Listeners
window.addEventListener('load', instantiateRecipeRepository);
allRecipesButton.addEventListener('click', displayAllRecipes);
recipeCardSection.addEventListener('click', event => {
  showRecipeDetails(event)});
