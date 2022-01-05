import './styles.css';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import User from './classes/User';
import { fetchAllUsers, fetchAllRecipes, fetchAllIngredients } from './apiCalls';
import domUpdates from './domUpdates';


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
const favoritesNavFavoritesButton = document.querySelector('#favoritesNavFavoritesButton');
const favoritesFilterViewButton =  document.querySelector('#favoritesFilterViewButton');
const searchFavoritesButton = document.querySelector('#searchFavoritesButton');
const favoriteSearchInput = document.querySelector('#favoriteSearchInput');
const navToCookButton = document.querySelector('#navToCookButton');
const homeButton = document.querySelector('#homeButton');
const favoritesHomeButton = document.querySelector('#favoritesHomeButton');
const homeNavBar = document.querySelector('#homeNavBar');
const favoriteNavToCookButton = document.querySelector('#favoriteNavToCookButton');

//Global variables
let recipeRepository;
let user;
let ingredientsData;

//Funtions
const fetchAll = () => {
  Promise.all([fetchAllUsers(), fetchAllRecipes(), fetchAllIngredients()])
  .then(data => {
    user = new User(getRandomElement(data[0]), data[2])
    recipeRepository = new RecipeRepository(data[1], data[2])
    ingredientsData = data[2];
  })
}

const getRandomElement = array => {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const displayAllRecipes = () => {
  domUpdates.addHidden([landingPageView]);
  domUpdates.removeHidden([recipeDisplayView]);
  domUpdates.getAllRecipes(recipeRepository.recipes);
}

const showRecipeDetails = (event) => {
  domUpdates.addHidden([recipeDisplayView]);
  domUpdates.removeHidden([recipeDetailsView]);
  recipeRepository.recipes.forEach(recipe => {
    if(event.target.id === recipe.id.toString()) {
      const selectedRecipe = new Recipe(recipe, ingredientsData);
      domUpdates.getRecipeDetails(selectedRecipe);
    }
  });
}

const displayFilterForm = () => {
  domUpdates.addHidden([landingPageView, recipeDisplayView, recipeDetailsView]);
  domUpdates.removeHidden([filterView]);
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
  domUpdates.addHidden([filterView, landingPageView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
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
        <button class="to-cook-button" id="${recipe.id}">🥘</button>
        <button class="add-favorite-button" id="${recipe.id}">❤️</button>
      </div>
    </section>`;
  });
}

const displayRecipeBySearchCriteria = () => {
  recipeRepository.filteredRecipes = [];
  const searchInputValue = searchInput.value.toLowerCase();
  heading.innerText = `Recipes searched by ${searchInputValue}`;
  domUpdates.addHidden([landingPageView, filterView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
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
  if(event.target.classList.contains('to-cook-button')) {
    addToToCook(event);
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
  domUpdates.addHidden([landingPageView, filterView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
  updateFavoritesNavBar();
  heading.innerText = 'Favorite Recipes';
  recipeCardSection.innerHTML = ``;
  user.favoriteRecipes.forEach(recipe => {
    recipeCardSection.innerHTML += `
    <section class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <button class="recipe-name-button" id="${recipe.id}" >${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button class="to-cook-button" id="${recipe.id}">🥘</button>
        <button class="remove-favorite-button" id="${recipe.id}">❌</button>
      </div>
    </section>`;
  })
}

const updateFavoritesNavBar = () => {
  domUpdates.addHidden([homeNavBar]);
  domUpdates.removeHidden([favoritesNavBar]);

}

const removeRecipeFromFavorites = (event) => {
  user.favoriteRecipes.forEach(recipe => {
    if(event.target.id === recipe.id.toString()) {
      user.removeFromFavorites(recipe);
    }
  })
}

const displayFavoritesFilterView = () => {
  domUpdates.addHidden([filterViewButton]);
  domUpdates.removeHidden([favoritesFilterViewButton]);
  displayFilterForm();
  filterViewTitle.innerText = 'Choose options to filter your favorite recipes below';
}

const displayFavoriteRecipesByTag = (event) => {
  event.preventDefault();
  domUpdates.addHidden([filterView, landingPageView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
  const selectedTag = document.querySelector('input[name="tag"]:checked').value;
  heading.innerText = `Favorite Recipes Filtered by ${selectedTag}`
  user.getFavoriteRecipeByTag(selectedTag);
  displayFavoriteFilteredRecipes();
}

const displayFavoriteFilteredRecipes = () => {
  recipeCardSection.innerHTML = ``;
  user.filteredFavoriteRecipes.forEach(recipe => {
    recipeCardSection.innerHTML += `
    <section class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <button class="recipe-name-button" id="${recipe.id}" >${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button class="to-cook-button" id="${recipe.id}">🥘</button>
        <button class="remove-favorite-button" id="${recipe.id}">❌</button>
      </div>
    </section>`;
  })
}

const displayFavoriteRecipesBySearchCriteria = () => {
  user.filteredFavoriteRecipes = [];
  const favoriteSearchInputValue = favoriteSearchInput.value.toLowerCase();
  heading.innerText = `Favorite recipes searched by ${favoriteSearchInputValue}`;
  domUpdates.addHidden([landingPageView, filterView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
  user.getRecipeByName(favoriteSearchInputValue);
  user.getRecipeByIngredients(favoriteSearchInputValue);
  displayFavoriteFilteredRecipes();
}

const addToToCook = (event) => {
  recipeRepository.recipes.forEach(recipe => {
    if(event.target.id === recipe.id.toString()) {
      user.addToRecipesToCook(recipe);
    }
  })
}

const displayRecipesToCook = () => {
  domUpdates.addHidden([landingPageView, filterView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
  heading.innerText = 'Recipes To Cook';
  homeButton.innerText = 'Home';
  recipeCardSection.innerHTML = ``;
  user.recipesToCook.forEach(recipe => {
    recipeCardSection.innerHTML += `
    <section class="recipe-card">
      <img class="recipe-card-img" src="${recipe.image}">
      <button class="recipe-name-button" id="${recipe.id}" >${recipe.name}</button>
      <div class="recipe-card-buttons">
        <button class="to-cook-button" id="${recipe.id}">🥘</button>
        <button class="add-favorite-button" id="${recipe.id}">❤️</button>
      </div>
    </section>`;
  })
}

const returnToHomePage = () => {
  domUpdates.addHidden([filterView, recipeDetailsView, recipeDisplayView, favoritesNavBar]);
  domUpdates.removeHidden([landingPageView, homeNavBar]);
  homeButton.innerText = 'What\'s Cookin'
}

//Event Listeners
window.addEventListener('load', fetchAll);

allRecipesButton.addEventListener('click', displayAllRecipes);

recipeCardSection.addEventListener('click', event => {
  determineButtonAction(event)});

navFilterButton.addEventListener('click', displayFilterForm);

filterViewButton.addEventListener('click', event => {
  displayRecipeByTag(event)});

searchButton.addEventListener('click', displayRecipeBySearchCriteria);

navFavoritesButton.addEventListener('click', displayFavoriteRecipes);

navFilterFavoritesButton.addEventListener('click', displayFavoritesFilterView);

favoritesFilterViewButton.addEventListener('click', event => {
displayFavoriteRecipesByTag(event)});

searchFavoritesButton.addEventListener('click', displayFavoriteRecipesBySearchCriteria);

navToCookButton.addEventListener('click', displayRecipesToCook);

homeButton.addEventListener('click', returnToHomePage);

favoritesHomeButton.addEventListener('click', returnToHomePage);

favoritesNavFavoritesButton.addEventListener('click', displayFavoriteRecipes);

favoriteNavToCookButton.addEventListener('click', displayRecipesToCook);
