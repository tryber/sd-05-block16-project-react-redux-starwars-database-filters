const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets'

const planetsAPI = (char) => (
  fetch(`${APIURL}${char.split().join('+')}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default planetsAPI;
