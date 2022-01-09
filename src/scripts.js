import './index.scss';
import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import User from './classes/User';
import Pantry from './classes/Pantry';
import { fetchAllUsers, fetchAllRecipes, fetchAllIngredients, addToUserPantry, removeFromUserPantry } from './apiCalls';
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
const navPantryButton = document.querySelector('#navPantryButton');
const favoriteNavPantryButton = document.querySelector('#favoriteNavPantryButton');
const pantryItemList = document.querySelector('#pantryItemList');
const missingIngredientsRecipeName = document.querySelector('#missingIngredientsRecipeName');
const missingIngredients = document.querySelector('#missingIngredients');
const missingIngredientsView = document.querySelector('#missingIngredientsView');
const addToPantryButton = document.querySelector('#addToPantryButton');
const missingIngredientTitle = document.querySelector('#missingIngredientTitle');
const missingIngredientContainer = document.querySelector('#missingIngredientContainer');

//Global variables
let recipeRepository;
let user;
let ingredientsData;
let pantry;

//Funtions
const fetchAll = () => {
  Promise.all([fetchAllUsers(), fetchAllRecipes(), fetchAllIngredients()])
  .then(data => {
    let randomUser = getRandomElement(data[0]);
    user = new User(randomUser, data[2])
    recipeRepository = new RecipeRepository(data[1], data[2])
    ingredientsData = data[2];
    pantry = new Pantry(randomUser, data[2]);
  })
}

const getRandomElement = array => {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const displayAllRecipes = () => {
  domUpdates.addHidden([missingIngredientsView, pantryView, landingPageView]);
  domUpdates.removeHidden([recipeDisplayView]);
  domUpdates.getAllRecipes(recipeRepository.recipes);
}

const showRecipeDetails = (event) => {
  domUpdates.addHidden([missingIngredientsView, pantryView, recipeDisplayView]);
  domUpdates.removeHidden([recipeDetailsView]);
  recipeRepository.recipes.forEach(recipe => {
    if(event.target.id === recipe.id.toString()) {
      const selectedRecipe = new Recipe(recipe, ingredientsData);
      domUpdates.getRecipeDetails(selectedRecipe);
    }
  });
}

const displayFilterForm = () => {
  domUpdates.addHidden([missingIngredientsView, pantryView, landingPageView, recipeDisplayView, recipeDetailsView]);
  domUpdates.removeHidden([filterView]);
  domUpdates.showFilterForm(returnUniqueTags());
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
  recipeRepository.filteredRecipes = [];
  event.preventDefault();
  const selectedTag = document.querySelector('input[name="tag"]:checked').value;
  domUpdates.addHidden([missingIngredientsView, pantryView, filterView, landingPageView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
  domUpdates.showHeading(`Recipes Filtered by ${selectedTag}`);
  recipeRepository.getRecipeByTag(selectedTag);
  displayFilteredRecipes();
}

const displayFilteredRecipes = () => {
  domUpdates.showFilteredRecipes(recipeRepository.filteredRecipes);
}

const displayRecipeBySearchCriteria = () => {
  recipeRepository.filteredRecipes = [];
  const searchInputValue = searchInput.value.toLowerCase();
  domUpdates.showHeading(`Recipes Filtered by ${searchInputValue}`);
  domUpdates.addHidden([missingIngredientsView, pantryView, landingPageView, filterView, recipeDetailsView]);
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
  if(event.target.classList.contains('missing-ingredients')) {
    displayMissingIngredients(event);
  }
  if(event.target.classList.contains('cook-now')) {
    removeIngredients(event);
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
  domUpdates.addHidden([missingIngredientsView, pantryView, landingPageView, filterView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
  domUpdates.showFavoriteRecipes(user.favoriteRecipes);
  domUpdates.showHeading('Favorite Recipes')
  updateFavoritesNavBar();
}

const updateFavoritesNavBar = () => {
  domUpdates.addHidden([missingIngredientsView, homeNavBar]);
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
  domUpdates.addHidden([missingIngredientsView, filterViewButton, pantryView]);
  domUpdates.removeHidden([favoritesFilterViewButton]);
  domUpdates.showFilterViewTitle('Choose options to filter your favorite recipes below');
  displayFilterForm();
}

const displayFavoriteRecipesByTag = (event) => {
  user.filteredFavoriteRecipes = [];
  event.preventDefault();
  domUpdates.addHidden([missingIngredientsView, pantryView, filterView, landingPageView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
  const selectedTag = document.querySelector('input[name="tag"]:checked').value;
  domUpdates.showHeading(`Favorite Recipes Filtered by ${selectedTag}`);
  user.getFavoriteRecipeByTag(selectedTag);
  displayFavoriteFilteredRecipes();
}

const displayFavoriteFilteredRecipes = () => {
  domUpdates.showFavoriteFilteredRecipes(user.filteredFavoriteRecipes);
}

const displayFavoriteRecipesBySearchCriteria = () => {
  user.filteredFavoriteRecipes = [];
  const favoriteSearchInputValue = favoriteSearchInput.value.toLowerCase();
  domUpdates.showHeading(`Favorite recipes searched by ${favoriteSearchInputValue}`);
  domUpdates.addHidden([missingIngredientsView, pantryView, landingPageView, filterView, recipeDetailsView]);
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
  Promise.all([fetchAllUsers(), fetchAllIngredients()])
    .then(data => {
      let updatedUser = data[0].find(user => {
        if (user.id === pantry.id) {
          return user
        }
      })
      pantry = new Pantry(updatedUser, data[1])
    });
  domUpdates.addHidden([missingIngredientsView, pantryView, landingPageView, filterView, recipeDetailsView]);
  domUpdates.removeHidden([recipeDisplayView]);
  domUpdates.showHeading('Recipes To Cook');
  domUpdates.showHomeButtonText('Home');
  domUpdates.showRecipesToCook(user.recipesToCook, pantry);
}

const returnToHomePage = () => {
  domUpdates.addHidden([missingIngredientsView, pantryView, filterView, recipeDetailsView, recipeDisplayView, favoritesNavBar, favoritesFilterViewButton]);
  domUpdates.removeHidden([landingPageView, homeNavBar, filterViewButton]);
  domUpdates.showHomeButtonText('What\'s Cookin');
  domUpdates.showFilterViewTitle('Choose options to filter recipes below')
}

const displayPantry = () => {
  domUpdates.addHidden([missingIngredientsView, landingPageView, filterView, recipeDetailsView, recipeDisplayView, favoritesNavBar]);
  domUpdates.removeHidden([pantryView, homeNavBar]);
  pantry.listPantryItems(recipeRepository);
  domUpdates.showPantry(pantry);
}

const displayMissingIngredients = (event) => {
  domUpdates.addHidden([recipeDisplayView]);
  domUpdates.removeHidden([missingIngredientContainer, missingIngredientsView, addToPantryButton]);
  pantry.missingIngredients = [];
  recipeRepository.recipes.forEach(recipe => {
    if (event.target.id === recipe.id.toString()) {
      pantry.determineMissingIngredients(recipe);
      domUpdates.showMissingIngredients(pantry.listMissingIngredientsByName(), recipe);
    }
  })
}

const addIngredientsAndReturnToCook = () => {
  pantry.missingIngredients.forEach(ingredient => {
    addToUserPantry(ingredient, pantry);
  })
  domUpdates.showSuccessMessage('Added To');
  domUpdates.addHidden([addToPantryButton, missingIngredientContainer]);
  window.setTimeout(displayRecipesToCook, 3000);
}

const removeIngredients = (event) => {
  recipeRepository.recipes.forEach(recipe => {
    if (event.target.id === recipe.id.toString()) {
      recipe.ingredients.forEach(ingredient => {
        console.log('IngredientID', ingredient.id, 'IngredientAmount', ingredient.quantity.amount, 'PantryID', pantry.id)
        removeFromUserPantry(ingredient, pantry)
      })
    }
  })
  domUpdates.addHidden([recipeDisplayView, addToPantryButton, missingIngredientContainer]);
  domUpdates.removeHidden([missingIngredientsView]);
  domUpdates.showSuccessMessage('Removed From');
  window.setTimeout(displayRecipesToCook, 3000);
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

navPantryButton.addEventListener('click', displayPantry);

favoriteNavPantryButton.addEventListener('click', displayPantry);

addToPantryButton.addEventListener('click', addIngredientsAndReturnToCook);
