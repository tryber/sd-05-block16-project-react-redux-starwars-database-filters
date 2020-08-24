const STARWARS_BASE_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getCurrentSW = () => (
  fetch(STARWARS_BASE_API)
    .then((response) => (
      response.json()
        .then((planets) => (response.ok ? Promise.resolve(planets) : Promise.reject(planets)))
    ))
);

export default getCurrentSW;
