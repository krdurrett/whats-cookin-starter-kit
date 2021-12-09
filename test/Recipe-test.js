import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import { recipeData, ingredientsData } from '../src/data/recipes-test';

describe('Recipe', () => {
  let recipe;
  let recipeRepository;
  beforeEach(() => {
    recipeData.forEach(recipes => {
      recipe = new Recipe(recipes, ingredientsData);
    })
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('Should instantiate a new instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('Should have an id', () => {
    expect(recipe.id).to.equal(678353);
  });

  it('Should have an image', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/678353-556x370.jpg');
  });

  it('Should have ingredients', () => {
    expect(recipe.ingredients).to.be.an('array');
    expect(recipe.ingredients.length).to.equal(12);
  });

  it('Should have instructions', () => {
    expect(recipe.instructions.length).to.equal(1);
  });

  it('Should have a name', () => {
    expect(recipe.name).to.equal('Maple Dijon Apple Cider Grilled Pork Chops');
  });

  it('Should have tags', () => {
    expect(recipe.tags.length).to.equal(4);
  });

  it('Should be able to determine the names of ingredients', () => {
    recipe.getIngredientNames();
    expect(recipe.getIngredientNames()).to.be.an('array');
  })

  it('Should be able to calculate the total recipe cost', () => {
    recipe.getRecipeCost();
    expect(recipe.totalRecipeCost).to.be.a('number');
  })
})
