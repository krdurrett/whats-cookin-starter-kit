import RecipeRepository from './classes/RecipeRepository';
import Recipe from './classes/Recipe';
import User from './classes/User';

let recipe;

let domUpdates = {
  addHidden(elements) {
    elements.forEach(item => {
      item.classList.add("hidden");
    })
  },
  removeHidden(elements) {
    elements.forEach(item => {
      item.classList.remove("hidden");
    })
  },
  getAllRecipes(recipeRepository) {
    heading.innerText = 'All Recipes'
    recipeCardSection.innerHTML = ``;
    recipeRepository.forEach(recipe => {
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
  },
  getRecipeDetails(selectedRecipe) {
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
      <span>${selectedRecipe.name}</span>
      <span>$${selectedRecipe.getRecipeCost()}</span>
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
    document.getElementById('recipeHeader').style.backgroundImage = `url(${selectedRecipe.image})`
  },
  showFilterForm(uniqueTags) {
    filterViewTags.innerHTML = '';
    uniqueTags.forEach(tag => {
      filterViewTags.innerHTML += `
      <div class="tag-style-div">
      <input type="radio" id="${tag}" name="tag" value="${tag}">
      <label for="${tag}">${tag}</label>
      </div>
      `
    });
  },
  showHeading(headingText) {
    heading.innerText = headingText;
  },
  showFilteredRecipes(filteredRecipes) {
    recipeCardSection.innerHTML = ``;
    filteredRecipes.forEach(recipe => {
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
  },
  showFavoriteRecipes(favoriteRecipes) {
    recipeCardSection.innerHTML = ``;
    favoriteRecipes.forEach(recipe => {
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
  },
  showFilterViewTitle() {
    filterViewTitle.innerText = 'Choose options to filter your favorite recipes below';
  },
  showFavoriteFilteredRecipes(favoriteFilteredRecipes) {
    recipeCardSection.innerHTML = ``;
    favoriteFilteredRecipes.forEach(recipe => {
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
  },
  showHomeButtonText(text) {
    homeButton.innerText = text;
  },
  showRecipesToCook(recipesToCook) {
    recipeCardSection.innerHTML = ``;
    recipesToCook.forEach(recipe => {
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
};

export default  domUpdates;
