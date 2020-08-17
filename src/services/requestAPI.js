const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestAPI = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => data);
};

export default requestAPI;
