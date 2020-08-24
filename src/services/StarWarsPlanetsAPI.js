const APIStarWarsPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';

const StarWarsPlanetsAPI = () => (
  fetch(APIStarWarsPlanets)
    .then((response) => (
      response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)),
    )))
);

export default StarWarsPlanetsAPI;

/* Estrutura retirada dos exercícios do bloco 16 */
