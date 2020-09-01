const PLANETS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default const apiPlanets = () => (
  fetch(PLANETS_ENDPOINT)
    .then((response) => response.json()
      .then((planets) => (response.ok ? Promisse.resolve(planets.results)
        : Promisse.reject(planets))))
);
