import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { recipeData, ingredientsData, usersData } from '../src/data/recipes-test';

describe('Pantry', () => {
  let recipe;
  let user;
  let user1;
  let pantry;

  beforeEach(() => {
    recipe = new Recipe(recipeData[1], ingredientsData);
    user = new User(usersData[1], ingredientsData);
    pantry = new Pantry(usersData[1], ingredientsData);
  });
  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });
  it('should instantiate a new instance of Pantry',  () => {
    expect(pantry).to.be.an.instanceOf(Pantry);
  });
  it('should determine if the pantry has enough ingredients', () => {
    pantry.determineIfPantryHasIngredients(recipe);
    expect(pantry.hasAllIngredients).to.equal(false);
  });
})
