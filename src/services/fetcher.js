const URL = "https://swapi-trybe.herokuapp.com/api/planets/";

export const fetcher = () => (
  fetch(URL)
  .then((response) => response.json()
  .then(response => response.ok ? Promise.reject(response) : Promise.resolve(response))
));
