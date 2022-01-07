import User from '../classes/User';

class Pantry extends User {
  constructor(usersData, ingredientsData) {
    super(usersData, ingredientsData);
    this.hasAllIngredients = false;
    this.missingIngredients = [];
    this.pantryItems = [];
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
        this.missingIngredients.push({id: recipeIngredient.id, amountNeeded: recipeIngredient.quantity.amount, unit: recipeIngredient.quantity.unit})
      } else if (foundPantryIngredient.ingredient === recipeIngredient.id && foundPantryIngredient.amount < recipeIngredient.quantity.amount) {
        this.missingIngredients.push({id: recipeIngredient.id, amountNeeded: recipeIngredient.quantity.amount - foundPantryIngredient.amount, unit: recipeIngredient.quantity.unit})
      }
    });
  }
  listMissingIngredientsByName() {
    return this.missingIngredients.map(missingIngredient => {
      const ingredientName = this.ingredients.find(ingredient => {
        return ingredient.id === missingIngredient.id
      }).name
      return {...missingIngredient, name: ingredientName}
    });
  }
  listPantryItems(recipeRepository) {
    this.pantryItems = this.pantry.map(pantryIngredient => {
      const foundIngredient = this.ingredients.find(ingredient => {
        if (ingredient.name === undefined) {
          return
        } else {
          return ingredient.id === pantryIngredient.ingredient;
        }
      })
      let ingredientUnit;
      recipeRepository.recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
          if(ingredient.id === pantryIngredient.ingredient) {
            ingredientUnit = ingredient.quantity.unit
          }
        })
      })
      if (foundIngredient === undefined) {
        return
      } else {
        return `${foundIngredient.name} ${pantryIngredient.amount} ${ingredientUnit}`
      }
    });
  }
}

export default Pantry;
