const url = 'https://swapi-trybe.herokuapp.com/api/planets';
function getAPI() {
  return fetch(`${url}`)
    .then((resp) => resp.json()
    .then((e) => e));
}

export default getAPI;
