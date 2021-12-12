export const fetchAllUsers = () => {
    return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
      .then(response => response.json())
      .then(data => data['usersData'])
      .catch(err => console.log('Oops! Something went wrong', err))
}

fetchAllUsers();

console.log('I will be a fetch request!')
