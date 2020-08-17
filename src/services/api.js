const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const resolveAPIPlanets = () => fetch(API)
  .then((response) => response.json())
  .then((data) => data);

export default resolveAPIPlanets;
