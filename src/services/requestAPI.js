// requisição de API - referência execício GoT (aula 16.4)

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestAPI = () => (
  fetch(URL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default requestAPI;
