const swApi = 'https://swapi-trybe.herokuapp.com/api/planets';

function getApi() {
  return fetch(swApi).then((response) =>
    response.json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );
}

export default getApi;
