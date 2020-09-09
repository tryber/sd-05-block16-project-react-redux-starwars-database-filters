import { REQUISICAO_BEM_SUCEDIDA, FAZENDO_REQUISICAO_API } from '../actions/action';

const STATE_INICIAL = {
  fazendoRequisicao: true,
  data: [],
};

const verificandoRequisicaoAPI = (state = STATE_INICIAL, action) => {
  switch (action.type) {
    case FAZENDO_REQUISICAO_API:
      // console.log('fazendo requisicao');
      return {
        ...state,
        fazendoRequisicao: action.fazendoRequisicao,
      };
    case REQUISICAO_BEM_SUCEDIDA:
      // console.log('sucedida');
      return {
        ...state,
        data: action.data,
        fazendoRequisicao: false,
      };
    default:
      return state;
  }
};

export default verificandoRequisicaoAPI;
/* Estrutura retirada dos exercícios do bloco 16 */
