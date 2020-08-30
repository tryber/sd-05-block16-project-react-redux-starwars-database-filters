const dataAPi = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const requisitionApi = (dataApi) =>
  fetch(dataApi)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(`Resultado não encontrado ${err}`));