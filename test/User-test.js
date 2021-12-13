import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { recipeData, ingredientsData, usersData } from '../src/data/recipes-test';


describe('User', () => {
  let recipe;
  let user;
  let user1;
  beforeEach(() => {
    recipe = new Recipe(recipeData[1], ingredientsData);
    user = new User(usersData[1], ingredientsData);
    user1 = new User({}, []);
  });
  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });
  it('Should instantiate a new instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  });
  it('Should store a name', () => {
    expect(user.name).to.equal('Ephraim Goyette');
    expect(user1.name).to.equal(undefined);
  });
  it('Should have an id', () => {
    expect(user.id).to.equal(2);
    expect(user1.id).to.equal(undefined);
  });
  it('Should have a pantry', () => {
    expect(user.pantry).to.be.an('array');
    expect(user1.pantry).to.equal(undefined);
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
  it('Should remove favorites from user favorite recipes', () => {
    user.addToFavorites(recipe);
    user.removeFromFavorites(recipe);
    expect(user.favoriteRecipes.length).to.equal(0);
  });
  it('Should be able to filter favorites', () => {
    user.addToFavorites(recipe);
    user.getFavoriteRecipeByTag('lunch');
    expect(user.filteredFavoriteRecipes[0]).to.be.a('object');
  });
  it('Should be able to filter favorite recipes by name', () => {
    user.addToFavorites(recipe);
    user.getRecipeByName('Maple');
    expect(user.filteredFavoriteRecipes[0]).to.be.a('object');
  });
  it('Should be able to filter favorite recipes by ingredient', () => {
    user.addToFavorites(recipe);
    user.getRecipeByIngredients('pork chop');
    expect(user.filteredFavoriteRecipes[0]).to.be.a('object');
  });
})
