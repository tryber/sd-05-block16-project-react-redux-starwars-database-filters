// Referência: aula ao vivo 16.4

const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = () => (
  fetch(PLANETS_API)
    .then((response) => (
      response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanets;
