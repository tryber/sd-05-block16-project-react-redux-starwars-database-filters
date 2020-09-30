const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

const fetcher = () => (
  fetch(URL)
  .then((response) => response.json().then((data) => (data)),
));

export default fetcher;
