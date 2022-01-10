import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData, ingredientsData, usersData } from '../src/data/recipes-test';

describe('Pantry', () => {
  let recipe;
  let recipe1;
  let user;
  let user1;
  let pantry;
  let pantry1;
  let recipeRepository;

  beforeEach(() => {
    recipe = new Recipe(recipeData[1], ingredientsData);
    recipe1 = new Recipe({}, [])
    user = new User(usersData[1], ingredientsData);
    user1 = new User(usersData[2], ingredientsData);
    pantry = new Pantry(usersData[1], ingredientsData);
    pantry1 = new Pantry(usersData[2], ingredientsData);
    recipeRepository = new RecipeRepository(recipeData, ingredientsData);
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
  it('should be able to determine missing ingredients', () => {
    pantry.determineMissingIngredients(recipe);
    expect(pantry.missingIngredients).to.be.an('array');
    expect(pantry.missingIngredients[0]).to.deep.equal({ id: 1009016, amountNeeded: 1.5, unit: 'cups'});
  });
  it('should be able to list names of missing ingredients', () => {
    pantry.determineMissingIngredients(recipe);
    pantry.listMissingIngredientsByName();
    expect(pantry.listMissingIngredientsByName()).to.be.an('array');
    expect(pantry.listMissingIngredientsByName()[0]).to.deep.equal({ id: 1009016, amountNeeded: 1.5, unit: 'cups', name:'apple cider'})
  })
  it('should be able to list pantry items', () => {
    pantry.listPantryItems(recipeRepository);
    expect(pantry.pantryItems).to.be.an('array');
    expect(pantry.pantryItems.length).to.equal(61);
  })
  it('should return undefined if ingredient in pantry doesnt exist', () => {
    pantry.listPantryItems(recipeRepository);
    expect(pantry.pantryItems[0]).to.equal(undefined);
  })
})
