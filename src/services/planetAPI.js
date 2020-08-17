const api = 'http://swapi-trybe.herokuapp.com/api/planets/?format=json'

export const requestPlanets = () => {
  fetch(api)
    .then((json) => (response.ok ? Promise.resolve
    (json) : Promise.reject(json)))
}

