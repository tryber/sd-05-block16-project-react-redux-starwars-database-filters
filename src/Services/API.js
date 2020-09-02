const PLANETS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = () => fetch(PLANETS_ENDPOINT).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json)
    : Promise.reject(json))));

export default getPlanets;
