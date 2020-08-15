const APIurl = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = () => fetch(APIurl)
  .then((response) => response.json())
  .then((data) => data);

export default fetchAPI;
