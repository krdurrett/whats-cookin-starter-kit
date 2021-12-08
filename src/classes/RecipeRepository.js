class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData;
    this.filteredRecipes = [];
  }
  getRecipeByTag(tag) {
    this.recipes.filter(recipe => {
      if(recipe.tags.includes(tag)) {
        this.filteredRecipes.push(recipe);
      }
    })
  }
  getRecipeByNameOrIngredients(searchPhrase) {
    this.recipes.filter(recipe => {
      if(recipe.name.includes(searchPhrase)) {
        this.filteredRecipes.push(recipe);
      }
    })
  }
}

export default RecipeRepository;
