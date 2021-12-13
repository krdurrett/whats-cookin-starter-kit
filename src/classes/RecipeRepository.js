class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData;
    this.ingredients = ingredientsData;
    this.filteredRecipes = [];
  }
  getRecipeByTag(tag) {
    this.recipes.filter(recipe => {
      if(recipe.tags.includes(tag)) {
        this.filteredRecipes.push(recipe);
      }
    })
  }
  getRecipeByName(searchPhrase) {
    this.recipes.filter(recipe => {
      if(recipe.name.toLowerCase().includes(searchPhrase)) {
        this.filteredRecipes.push(recipe);
      }
    })
  }
  getRecipeByIngredients(searchPhrase) {
    const filteredIngredients = this.ingredients.filter(ingredient => {
      if(ingredient.name === undefined) {
        return
      } else {
        return ingredient.name.includes(searchPhrase)
      }
    });
    filteredIngredients.forEach(ingredient => {
      const recipesToPush = this.recipes.filter(recipe => {
        const recipeIngredient = recipe.ingredients.find(ing => {
          return ing.id === ingredient.id;
        })
        if(recipeIngredient) {
          return recipeIngredient.id === ingredient.id;
        } else {
          return false;
        }
      })
      recipesToPush.forEach(recipe => {
        if (!this.filteredRecipes.includes(recipe)) {
          this.filteredRecipes.push(recipe);
        }
      })
    })
  }
}

export default RecipeRepository;
