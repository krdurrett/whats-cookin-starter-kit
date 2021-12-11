import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { recipeData, ingredientsData, usersData } from '../src/data/recipes-test';


describe('User', () => {
  let recipe;
  let user;

  beforeEach(() => {
    recipe = new Recipe(recipeData, ingredientsData);
    usersData.forEach(user => {
      user = new User(user);
    });
  });
  it('Should be a function', () => {
    console.log('user?', user)
    console.log('recipe?????', recipe)
    expect(user).to.be.a('function');
  })
  it('Should instantiate a new instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  });
  it('Should store a name', () => {
    expect(user.name).to.equal('Ephraim Goyette');
  })
  it('Should have an id', () => {
    expect(user.id).to.equal(2);
  })
  it('Should have a pantry', () => {
    expect(user.pantry).to.be.an('array');
  })
  // it('Should have favorite recipes', () => {
  //   expect(user.favoriteRecipes).to.equal()
  // })
})
