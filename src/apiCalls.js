export const fetchAllUsers = () => {
    return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
      .then(response => response.json())
      .catch(err => console.log('Oops! Something went wrong', err))
}

export const fetchAllRecipes = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
    .then(response => response.json())
    .catch(err => console.log('Oops! Something went wrong', err))
}

export const fetchAllIngredients = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
    .then(response => response.json())
    .catch(err => console.log('Oops! Something went wrong', err))
}

console.log('I will be a fetch request!')
