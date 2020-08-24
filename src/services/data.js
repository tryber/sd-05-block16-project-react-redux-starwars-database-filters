const getPlanets = () => (
  fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json')
    .then((response) => (
      response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
export default getPlanets;
