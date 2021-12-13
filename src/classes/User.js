class User {
  constructor(usersData, ingredientsData) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.filteredFavoriteRecipes = [];
    this.ingredients = ingredientsData;
  }
  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }
  removeFromFavorites(recipe) {
    const recipeIndex = this.favoriteRecipes.indexOf(recipe)
    this.favoriteRecipes.splice(recipeIndex, 1);
  }
  addToRecipesToCook(recipe) {
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    }
  }
  getFavoriteRecipeByTag(tag) {
    this.favoriteRecipes.filter(recipe => {
      if (recipe.tags.includes(tag)) {
        this.filteredFavoriteRecipes.push(recipe);
      }
    })
  }
  getRecipeByName(searchPhrase) {
    this.favoriteRecipes.filter(recipe => {
      if(recipe.name.toLowerCase().includes(searchPhrase)) {
        this.filteredFavoriteRecipes.push(recipe);
      }
    })
  }
  getRecipeByIngredients(searchPhrase) {
    const filteredIngredients = this.ingredients.filter(ingredient => {
      return ingredient.name.includes(searchPhrase)
    });
    filteredIngredients.forEach(ingredient => {
      const recipesToPush = this.favoriteRecipes.filter(recipe => {
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
        if (!this.filteredFavoriteRecipes.includes(recipe)) {
          this.filteredFavoriteRecipes.push(recipe);
        }
      })
    })
  }
}



export default User;
