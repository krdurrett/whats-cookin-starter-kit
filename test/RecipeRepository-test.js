import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import recipeData from '../src/data/recipes-test';

describe('Recipe', () => {
  let recipeRepository;
  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should instantiate a new instance of recipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository);
  });

  
})
