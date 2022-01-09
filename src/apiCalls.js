import { displayPostErrorMsg } from './scripts';

export const fetchAllUsers = () => {
    return fetch('http://localhost:3001/api/v1/users')
      .then(response => response.json())
}

export const fetchAllRecipes = () => {
  return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
}

export const fetchAllIngredients = () => {
  return fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
}

export const addToUserPantry = (ingredientInfo, pantry) => {
  return fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    body: JSON.stringify({userID: parseFloat(`${pantry.id}`), ingredientID: parseFloat(`${ingredientInfo.id}`), ingredientModification: parseFloat(`${ingredientInfo.amountNeeded}`)}),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => displayPostErrorMsg(data.message))
  .catch(err => displayPostErrorMsg(err))
}

export const removeFromUserPantry = (ingredientInfo, pantry) => {
  return fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    body: JSON.stringify({userID: parseFloat(`${pantry.id}`), ingredientID: parseFloat(`${ingredientInfo.id}`), ingredientModification: parseFloat(`-${ingredientInfo.quantity.amount}`)}),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => displayPostErrorMsg(data.message))
  .catch(err => displayPostErrorMsg(err))
}


console.log('I will be a fetch request!')
