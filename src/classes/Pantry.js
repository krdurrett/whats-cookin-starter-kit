import User from '../classes/User';

class Pantry extends User {
  constructor(usersData, ingredientsData) {
    super(usersData, ingredientsData);
    this.hasAllIngredients = false;
    this.missingIngredients = [];
  }
  determineIfPantryHasIngredients(recipe) {
    const ingredientIds = recipe.ingredients.map(ingredient => {
      return ingredient.id
    })
    ingredientIds.forEach(id => {
      const foundPantryIngredient = this.pantry.find(ingredient => {
        return ingredient.ingredient === id
      })
      const foundRecipeIngredient = recipe.ingredients.find(ingredient => {
        return ingredient.id === id
      })
      if (foundPantryIngredient === undefined) {
        this.hasAllIngredients = false
      } else if (foundPantryIngredient.amount < foundRecipeIngredient.quantity.amount) {
        this.hasAllIngredients = false
      } else if (foundPantryIngredient.amount > foundRecipeIngredient.quantity.amount) {
        this.hasAllIngredients = true
      }
    })
  }
  determineMissingIngredients(recipe) {
    recipe.ingredients.forEach((recipeIngredient) => {
      const foundPantryIngredient = this.pantry.find(ingredient => {
        return ingredient.ingredient === recipeIngredient.id
      })
      if (foundPantryIngredient === undefined) {
        this.missingIngredients.push({id: recipeIngredient.id, amountNeeded: recipeIngredient.quantity.amount})
      } else if (foundPantryIngredient.ingredient === recipeIngredient.id && foundPantryIngredient.amount < recipeIngredient.quantity.amount) {
        this.missingIngredients.push({id: recipeIngredient.id, amountNeeded: recipeIngredient.quantity.amount - foundPantryIngredient.amount})
      }
    })
  }
  listMissingIngredientsByName() {

  }
}

export default Pantry;
