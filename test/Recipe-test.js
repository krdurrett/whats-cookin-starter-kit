import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import { recipeData, ingredientsData } from '../src/data/recipes-test';

describe('Recipe', () => {
  let recipe;
  let recipe1;
  beforeEach(() => {
    recipe = new Recipe(recipeData[1], ingredientsData);

    recipe1 = new Recipe({}, []);
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('Should instantiate a new instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('Should have an id', () => {
    expect(recipe.id).to.equal(678353);
    expect(recipe1.id).to.equal(undefined);
  });

  it('Should have an image', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/678353-556x370.jpg');
    expect(recipe1.image).to.equal(undefined);
  });

  it('Should have ingredients', () => {
    expect(recipe.ingredients).to.be.an('array');
    expect(recipe.ingredients.length).to.equal(12);
    expect(recipe1.ingredients).to.equal(undefined);
  });

  it('Should have instructions', () => {
    expect(recipe.instructions.length).to.equal(1);
    expect(recipe1.instructions).to.equal(undefined);
  });

  it('Should have a name', () => {
    expect(recipe.name).to.equal('Maple Dijon Apple Cider Grilled Pork Chops');
    expect(recipe1.name).to.equal(undefined);
  });

  it('Should have tags', () => {
    expect(recipe.tags.length).to.equal(4);
    expect(recipe1.tags).to.equal(undefined);
  });

  it('Should be able to determine the names of ingredients', () => {
    recipe.getIngredientNames();
    expect(recipe.getIngredientNames()).to.be.an('array');
  });

  it('Should be able to calculate the total recipe cost', () => {
    recipe.getRecipeCost();
    expect(recipe.totalRecipeCost).to.be.a('number');
  });
  it('Should return a recipe\'s instructions', () => {
    recipe.getRecipeInstructions();
    expect(recipe.instructions).to.be.an('array')
  });
})
