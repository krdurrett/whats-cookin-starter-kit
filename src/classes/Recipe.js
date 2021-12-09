// const recipeRepository = import { RecipeRepository } from '../src/classes/RecipeRepository';
// import RecipeRepository from '../src/classes/RecipeRepository'

class Recipe {
  constructor(recipe, ingredientsData) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.allIngredients = ingredientsData;
    this.totalRecipeCost = 0;
  }
  getIngredientNames() {
    let ingredientNames = [];
    const ingredientIds = this.ingredients.map((ingredient) => {
      return ingredient.id
    })
    ingredientIds.forEach((id) => {
      const ingredientName = this.allIngredients.find((ingredient) => {
        return ingredient.id === id
      }).name
      ingredientNames.push(ingredientName);
    })
    return ingredientNames;
  }
  getRecipeCost() {
    this.ingredients.map((ingredient) => {
      return ingredient.id
    }).forEach(id => {
      const ingredientCost = this.allIngredients.find((ing) => {
        return ing.id === id;
      }).estimatedCostInCents
      const ingredientAmount = this.ingredients.find((ing) => {
        return ing.id === id;
      }).quantity.amount
      this.totalRecipeCost += ((ingredientCost * ingredientAmount) / 100);
    })
    console.log('total??? ', this.totalRecipeCost)
    return (this.totalRecipeCost);
    //For each ingredident name, obtain the ingredient cost from this.allIngredients
    //AND obtain the ingredient amount from this.ingredients
    //Multiply those two together
    //Add all together

  }
}






export default Recipe;
