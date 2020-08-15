const URL = 'https://swapi-trybe.herokuapp.com/api/';

const getStarWarsPlanets = () => (
  fetch(`${URL}planets`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getStarWarsPlanets;
