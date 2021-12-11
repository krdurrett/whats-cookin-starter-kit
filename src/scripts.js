import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import User from './classes/User';
import recipeData from './data/recipes';
import ingredientsData from './data/ingredients';
import usersData from './data/users';

//Query Selectors
const allRecipesButton = document.querySelector('#allRecipesButton');
const recipeCardSection = document.querySelector('#recipeCardSection');
const landingPageView = document.querySelector('#landingPageView');
const recipeDisplayView = document.querySelector('#recipeDisplayView');
const heading = document.querySelector('#heading');
const recipeDetailsView = document.querySelector('#recipeDetailsView');
const navFilterButton = document.querySelector('#navFilterButton');
const filterView = document.querySelector('#filterView');
const filterViewTags = document.querySelector('#filterViewTags');
const filterViewButton = document.querySelector('#filterViewButton');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const navFavoritesButton = document.querySelector('#navFavoritesButton');
const navSection = document.querySelector('#navSection');
const favoritesNavBar = document.querySelector('#favoritesNavBar');
const navFilterFavoritesButton = document.querySelector('#navFilterFavoritesButton');
const filterViewTitle = document.querySelector('#filterViewTitle');
const filterViewButtonContainer = document.querySelector('#filterViewButtonContainer');
//Global variables
let recipeRepository;
let user;

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

const getRandomElement = array => {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const instantiation = () => {
  recipeRepository = new RecipeRepository(recipeData, ingredientsData);
  user = new User(getRandomElement(usersData), ingredientsData);
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
        <button class="to-cook-button">🥘</button>
        <button class="add-favorite-button" id="${recipe.id}">❤️</button>
      </div>
    </section>`;
  })
}



const showRecipeDetails = (event) => {
  addHidden([recipeDisplayView]);
  removeHidden([recipeDetailsView]);
  recipeRepository.recipes.forEach(recipe => {
    if(event.target.id === recipe.id.toString()) {
      const selectedRecipe = new Recipe(recipe, ingredientsData);
      let ingredientNames = selectedRecipe.getIngredientNames().reduce((acc, ingredient) => {
        acc += `<li>${ingredient}</li>`
        return acc;
      }, ``);
      let ingredientInstructions = selectedRecipe.getRecipeInstructions().reduce((acc, instruction) => {
        acc += `<li>${instruction}</li>`
        return acc;
      }, ``);
      recipeDetailsView.innerHTML = `
      <section class="recipe-header" id="recipeHeader">
        <span>${recipe.name}</span>
        <span>${selectedRecipe.getRecipeCost()}</span>
        <div class="recipe-detail-buttons">
          <button class="to-cook-button">🥘</button>
          <button class="add-favorite-button" id="${recipe.id}">❤️</button>
        </div>
      </section>
      <div class= "recipe-details">
        <section class="ingredients">
          <h2>Ingredients</h2>
          <ul>${ingredientNames}</ul>
        </section>
        <section class="instructions">
          <h2>Instructions</h2>
          <ol>${ingredientInstructions}</ol>
        </section>
      </div>`
      document.getElementById('recipeHeader').style.backgroundImage = `url(${recipe.image})`
    }
  });
}

const displayFilterForm = () => {
  addHidden([landingPageView, recipeDisplayView, recipeDetailsView]);
  removeHidden([filterView]);
  filterViewTags.innerHTML = '';
  returnUniqueTags().forEach(tag => {
    filterViewTags.innerHTML += `
    <div class="tag-style-div">
    <input type="radio" id="${tag}" name="tag" value="${tag}">
    <label for="${tag}">${tag}</label>
    </div>
    `
  });
}

const returnUniqueTags = () => {
  instantiation();
  const uniqueTags = recipeRepository.recipes.flatMap((recipe) => {
    return recipe.tags;
    }).reduce((acc, tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
      return acc;
    }, []);
  return uniqueTags;
}

const displayRecipeByTag = (event) => {
  event.preventDefault();
  const selectedTag = document.querySelector('input[name="tag"]:checked').value;
  addHidden([filterView]);
  removeHidden([recipeDisplayView]);
  heading.innerText = `Recipes Filtered by ${selectedTag}`
  recipeRepository.getRecipeByTag(selectedTag);
  displayFilteredRecipes();
}

const displayFilteredRecipes = () => {
  recipeCardSection.innerHTML = ``;
  recipeRepository.filteredRecipes.forEach(recipe => {
    recipeCardSection.innerHTML += `
    <section class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <button class="recipe-name-button" id="${recipe.id}" >${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button class="to-cook-button">🥘</button>
        <button class="add-favorite-button" id="${recipe.id}">❤️</button>
      </div>
    </section>`;
  });
}

const displayRecipeBySearchCriteria = () => {
  recipeRepository.filteredRecipes = [];
  const searchInputValue = searchInput.value;
  heading.innerText = `Recipes searched by ${searchInputValue}`;
  addHidden([landingPageView, filterView, recipeDetailsView]);
  removeHidden([recipeDisplayView]);
  recipeRepository.getRecipeByName(searchInputValue);
  recipeRepository.getRecipeByIngredients(searchInputValue);
  displayFilteredRecipes();
}

const determineButtonAction = (event) => {
  if(event.target.classList.contains('recipe-name-button')) {
    showRecipeDetails(event);
  }
  if(event.target.classList.contains('add-favorite-button')) {
    addRecipeToFavorites(event);
  }
  if(event.target.classList.contains('remove-favorite-button')) {
    removeRecipeFromFavorites(event);
    displayFavoriteRecipes();
  }
}

const addRecipeToFavorites = (event) => {
  recipeRepository.recipes.forEach(recipe => {
    if(event.target.id === recipe.id.toString()) {
      user.addToFavorites(recipe);
    }
  })
}

const displayFavoriteRecipes = () => {
  addHidden([landingPageView, filterView, recipeDetailsView]);
  removeHidden([recipeDisplayView]);
  updateFavoritesNavBar();
  heading.innerText = 'Favorite Recipes';
  recipeCardSection.innerHTML = ``;
  user.favoriteRecipes.forEach(recipe => {
    recipeCardSection.innerHTML += `
    <section class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <button class="recipe-name-button" id="${recipe.id}" >${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button class="to-cook-button">🥘</button>
        <button class="remove-favorite-button" id="${recipe.id}">❌</button>
      </div>
    </section>`;
  })
}

const updateFavoritesNavBar = () => {
  addHidden([homeNavBar]);
  removeHidden([favoritesNavBar]);

}

const removeRecipeFromFavorites = (event) => {
  user.favoriteRecipes.forEach(recipe => {
    if(event.target.id === recipe.id.toString()) {
      user.removeFromFavorites(recipe);
    }
  })
}

const displayFavoritesFilterView = () => {
  displayFilterForm();
  filterViewTitle.innerText = 'Choose options to filter your favorite recipes below';
  filterViewButtonContainer.innerHTML = `
  <button class="filter-view-button" id="favoritesFilterViewButton">Get Recipes</button>
  `
}

//Event Listeners
window.addEventListener('load', instantiation);
allRecipesButton.addEventListener('click', displayAllRecipes);
recipeCardSection.addEventListener('click', event => {
  determineButtonAction(event)});
navFilterButton.addEventListener('click', displayFilterForm);
filterViewButton.addEventListener('click', event => {
  displayRecipeByTag(event)});
searchButton.addEventListener('click', displayRecipeBySearchCriteria);
navFavoritesButton.addEventListener('click', displayFavoriteRecipes)
navFilterFavoritesButton.addEventListener('click', displayFavoritesFilterView)
