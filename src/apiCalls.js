export const fetchAllUsers = () => {
    return fetch('http://localhost:3001/api/v1/users')
      .then(response => response.json())
      .catch(err => console.log('Oops! Something went wrong', err))
}

export const fetchAllRecipes = () => {
  return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .catch(err => console.log('Oops! Something went wrong', err))
}

export const fetchAllIngredients = () => {
  return fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => response.json())
    .catch(err => console.log('Oops! Something went wrong', err))
}

export const adjustUserPantry = (ingredientInfo, pantry) => {
  return fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    body: JSON.stringify({userID: parseFloat(`${pantry.id}`), ingredientID: parseFloat(`${ingredientInfo.id}`), ingredientModification: parseFloat(`${ingredientInfo.amountNeeded}`)}),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('Oops! Something went wrong', err))
}

console.log('I will be a fetch request!')
