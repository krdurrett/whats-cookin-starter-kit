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
    return (this.totalRecipeCost);
  }
  getRecipeInstructions() {
    const instructions = this.instructions.map((instruction) => {
      return `${instruction.number} ${instruction.instruction}`
    })
    return instructions;
  }
}






export default Recipe;
