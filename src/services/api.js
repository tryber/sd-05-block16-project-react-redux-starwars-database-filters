const APIURL = 'https://swapi-trybe.herokuapp.com/api/planets/';

// fetch baseado nos exercicios do dia 16.4
export const planetAPI = () => (
  fetch(APIURL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
