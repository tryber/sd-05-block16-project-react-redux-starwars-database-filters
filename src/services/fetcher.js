const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetcher = () => (
  fetch(URL)
  .then((response) => response.json()
  .then(response.ok ? Promise.reject(response) : Promise.resolve(response)),
));

export default fetcher;
