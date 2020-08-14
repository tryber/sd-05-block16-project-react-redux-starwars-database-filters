// usei o exercicio de redux de game of thrones como base para fazer essa requisição api

const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets';

const planetsAPI = (planet) =>
  fetch(`${APIURL}${planet.split().join('+')}`).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  );

export default planetsAPI;
