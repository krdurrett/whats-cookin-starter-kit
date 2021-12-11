class User {
  constructor(usersData) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.filteredFavoriteRecipes = [];
  }
  addToFavorites(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
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
      if(recipe.name.includes(searchPhrase)) {
        this.filteredFavoriteRecipes.push(recipe);
      }
    })
  }
}



export default User;
