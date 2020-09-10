// Referencia:
// https://course.betrybe.com/front-end/js-asynchronous/promises#vamos-fazer-juntos
// A construção da função verificaFetch() foi construida através da leitura da matéria.
async function VerificaFetch(url) {
  if (url === 'https://swapi-trybe.herokuapp.com/api/planets/') {
    return fetch(url)
      .then((resposta) => resposta.json())
      .then((resposta) => (resposta.results))
      .catch((erro) => console.log(`A chamada à API apresentou erro: ${erro}`));
  }
  throw new Error('endpoint não existe');
}
// console.log(VerificaFetch('https://swapi-trybe.herokuapp.com/api/planets/'));
// verificando se puxou as informações corretas da API
// observar no console do inspecionar
export default VerificaFetch;
