const API_SW = 'https://swapi-trybe.herokuapp.com/api/planets';

function resolveApi() {
  return fetch(API_SW)
  .then((response) => response.json()
  .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
}

export default resolveApi;
