class User {
  constructor(usersData) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry;
    this.favoriteRecipes = [];
  }
  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe)
  }

}



export default User;
