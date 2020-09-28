const dataAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

/* Retorno API consultado StackOverflow
  https://stackoverflow.com/questions/55888233/filter-api-result-with-react */

const requisicaoAPI = () =>
  fetch(dataAPI)
  .then((resposta) => resposta.json())
  .then((resposta) => resposta.results)
  .catch((erro) => console.log(`a api apresentou o seguinte erro: ${erro}`));

export default requisicaoAPI;
