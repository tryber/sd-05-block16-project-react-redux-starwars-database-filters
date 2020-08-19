const APIStarWarsPalnets = 'https://swapi-trybe.herokuapp.com/api/planets/';

const StarWarsPlanetsAPI = () => (
  fetch(APIStarWarsPalnets)
    .then((response) => (
      response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))
    )))
);

export default StarWarsPlanetsAPI;
