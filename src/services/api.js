const API = 'https://swapi.dev/api/planets/';

const resolveAPI = () => (
  fetch(API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    )));

export default resolveAPI;
