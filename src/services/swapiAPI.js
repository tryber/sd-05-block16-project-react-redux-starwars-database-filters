// const fetch = require('node-fetch');

const URL = 'https://swapi-trybe.herokuapp.com/api/planets';

// TIRAR DÚVIDA SOBRE ESSA PARTE COM ALGUÉM(pq no exemplo da aula hamaji retornou uma Promise?)

// Referência: aula ao vivo dia 16.4
const fetchAPI = () =>
  fetch(URL)
  .then((response) => response.json()
  .then((data) => data),
  );

export default fetchAPI;

// fetchAPI().then(data => console.log(data));
