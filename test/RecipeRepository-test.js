import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData, ingredientsData } from '../src/data/recipes-test';

describe('RecipeRepository', () => {
  let recipeRepository;
  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData, ingredientsData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should instantiate a new instance of recipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository);
  });

  it('Should be able to store an array of recipes', () => {
    expect(recipeRepository.recipes).to.be.an('array');
    // expect(recipeRepository.recipes[0].name)to.deep.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('Should be able to filter recipes by one or more tags', () => {
    recipeRepository.getRecipeByTag('snack');

    expect(recipeRepository.filteredRecipes).to.be.an('array');
    expect(recipeRepository.filteredRecipes[0]).to.be.an('object');
  });

  it('Should be able to filter recipes by name', () => {
    recipeRepository.getRecipeByName('Cookie');
    expect(recipeRepository.filteredRecipes).to.be.an('array');
    expect(recipeRepository.filteredRecipes[0]).to.be.an('object');
  });

  it('Should be able to filter recipe by ingredient', () => {
    recipeRepository.getRecipeByIngredients('bicarbonate of soda');
    expect(recipeRepository.filteredRecipes[0]).to.be.an('object');
  })

})
