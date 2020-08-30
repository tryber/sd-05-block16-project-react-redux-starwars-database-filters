import StarWarsPlanetsAPI from '../services/StarWarsPlanetsAPI';

export const REQUISICAO_BEM_SUCEDIDA = 'REQUISICAO_BEM_SUCEDIDA';
export const FAZENDO_REQUISICAO_API = 'FAZENDO_REQUISICAO_API';

// Levar em consideraçao a action pqEstáVindoDa API eDepois o reducer(verSeOsNomesEstãoCoincidindo)
// Actions retornam objetos
export const fazendoRequicaoAPI = () => ({ /* Informa que eu estou fazendo uma Requisição na API */
  type: FAZENDO_REQUISICAO_API,
  fazendoRequisicao: true,
});

export const requicaoBemSucedida = ({ results }) => ({
  /* Informa que a requisição foi bem sucedida */
  type: REQUISICAO_BEM_SUCEDIDA,
  data: results, /* Puxando o results da StarWarsPlanetsAPI.js */
});

// Actions creator retorna uma função
export default function fetchAPIStarWarsPlanets() {
/* essa função acima chama a Api que está em services/StarWarsPlanetsAPI.js */
  return (dispatch) => { // Ação sincrona para verificar a requisição
    dispatch(fazendoRequicaoAPI());
    return StarWarsPlanetsAPI()// Ação assincrona para receber informações da API
      .then(
        (planet) => dispatch(requicaoBemSucedida(planet)),
      );
  };
}

/* Estrutura retirada dos exercícios do bloco 16 */
