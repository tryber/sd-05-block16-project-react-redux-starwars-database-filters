import { REQUISICAO_BEM_SUCEDIDA, REQUISICAO_MAL_SUCEDIDA, LOADING } from '../actions/action';

const STATE_INICIAL = {
  loading: false,
  payload: '',
};

const VerificaActions = (state = STATE_INICIAL, action) => {
  if (action.type === REQUISICAO_BEM_SUCEDIDA) {
    return {
      ...state,
      loadind: false,
      payload: action.payload.results[0],
    };
  }

  if (action.type === REQUISICAO_MAL_SUCEDIDA) {
    return {
      ...state,
      loading: false,
      payload: action.error,
    };
  }

  if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
  return state;
};

export default VerificaActions;

/* Estrutura retirada dos exercícios do bloco 16 */