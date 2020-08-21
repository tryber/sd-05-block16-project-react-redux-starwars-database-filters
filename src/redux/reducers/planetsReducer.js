import { REQUISICAO_BEM_SUCEDIDA, FAZENDO_REQUISICAO_API } from '../actions/action';

const STATE_INICIAL = {
  fazendoRequisicao: true,
  resultPlanets: [],
};

const reducerVerificaActions = (state = STATE_INICIAL, action) => {
  console.log(action);
  switch (action.type) {
    case FAZENDO_REQUISICAO_API:
      return {
        ...state,
        fazendoRequisicao: action.fazendoRequisicao,
      };
    case REQUISICAO_BEM_SUCEDIDA:
      return {
        ...state,
        resultPlanets: action.resultPlanets,
        fazendoRequisicao: false,
      };
    default:
      return state;
  }
};

export default reducerVerificaActions;
/* Estrutura retirada dos exercícios do bloco 16 */
