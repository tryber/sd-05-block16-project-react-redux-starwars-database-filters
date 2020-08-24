import { REQUISICAO_BEM_SUCEDIDA, FAZENDO_REQUISICAO_API } from '../actions/action';

const STATE_INICIAL = {
  fazendoRequisicao: true,
  resultPlanets: [],
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const reducerVerificaActions = (state = STATE_INICIAL, action) => {
  console.log('action reducer', action);
  switch (action.type) {
    case FAZENDO_REQUISICAO_API:
      console.log('Olá');
      return {
        ...state,
        resultPlanets: [],
        fazendoRequisicao: action.fazendoRequisicao,
      };
    case REQUISICAO_BEM_SUCEDIDA:
      console.log('oi');
      return {
        ...state,
        resultPlanets: action.data,
        fazendoRequisicao: false,
      };
    default:
      return state;
  }
};

export default reducerVerificaActions;
/* Estrutura retirada dos exercícios do bloco 16 */
