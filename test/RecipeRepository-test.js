import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData, ingredientsData } from '../src/data/recipes-test';

describe('RecipeRepository', () => {
  let recipeRepository;
  let recipeRepository1;
  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData, ingredientsData);
    recipeRepository1 = new RecipeRepository();
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should instantiate a new instance of recipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository);
  });

  it('Should be able to store an array of recipes', () => {
    expect(recipeRepository.recipes).to.be.an('array');
    expect(recipeRepository.recipes).to.deep.equal(recipeData);
    expect(recipeRepository1.recipes).to.equal(undefined);
  });

  it('Should be able to store an array of ingredients', () => {
    expect(recipeRepository.ingredients).to.be.an('array');
    expect(recipeRepository.ingredients).to.deep.equal(ingredientsData);
    expect(recipeRepository1.ingredients).to.equal(undefined);
  })

  it('Should be able to filter recipes by one or more tags', () => {
    recipeRepository.getRecipeByTag('snack');

    expect(recipeRepository.filteredRecipes).to.be.an('array');
    expect(recipeRepository.filteredRecipes[0]).to.be.an('object');

  });

  it('Should be able to filter recipes by name', () => {
    recipeRepository.getRecipeByName('cookie');
    expect(recipeRepository.filteredRecipes).to.be.an('array');
    expect(recipeRepository.filteredRecipes[0]).to.be.an('object');
  });

  it('Should be able to filter recipe by ingredient', () => {
    recipeRepository.getRecipeByIngredients('salt');
    expect(recipeRepository.filteredRecipes.length).to.equal(1);
    expect(recipeRepository.filteredRecipes[0]).to.be.an('object');
  })

})
