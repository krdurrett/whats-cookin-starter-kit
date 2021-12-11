import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { recipeData, ingredientsData, usersData } from '../src/data/recipes-test';


describe('User', () => {
  let recipe;
  let user;

  beforeEach(() => {
    recipeData.forEach(recipes => {
      recipe = new Recipe(recipes, ingredientsData);
    })
    usersData.forEach(person => {
      user = new User(person);
    });
  });
  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });
  it('Should instantiate a new instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  });
  it('Should store a name', () => {
    expect(user.name).to.equal('Ephraim Goyette');
  });
  it('Should have an id', () => {
    expect(user.id).to.equal(2);
  });
  it('Should have a pantry', () => {
    expect(user.pantry).to.be.an('array');
  });
  it('Should have favorite recipes', () => {
    user.addToFavorites(recipe);
    expect(user.favoriteRecipes).to.be.a('array');
    expect(user.favoriteRecipes.length).to.equal(1);
  });
  it('Should be able to add recipes to cook', () => {
    user.addToRecipesToCook(recipe);
    expect(user.recipesToCook).to.be.a('array');
    expect(user.recipesToCook.length).to.equal(1);
  });
  it('Should be able to filter favorites', () => {
    user.addToFavorites(recipe);
    user.getFavoriteRecipeByTag('lunch');
    expect(user.filteredFavoriteRecipes[0]).to.be.a('object');
  })
  it('Should be able to filter favorite recipes by name', () => {
    user.addToFavorites(recipe);
    user.getRecipeByName('Maple');
    expect(user.filteredFavoriteRecipes[0]).to.be.a('object');
  })
})
