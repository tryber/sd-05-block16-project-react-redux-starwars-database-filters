const URL = 'https://swapi-trybe.herokuapp.com/api/';

export const getStarWarsPlanets = () => (
  fetch(`${URL}planets`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
