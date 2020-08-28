import {
  SUCESSO,
  FALHA,
  CARREGANDO,
} from '../actions/dataAction';

const INICIAL_STATE = {
  isFetching: true,
  planetas: [],
  erro: '',
  filters: '',
};

const dataReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case SUCESSO:
      return {
        ...state,
        planetas: action.data,
        isFetching: false,
      };
    case CARREGANDO:
      return {
        ...state,
      };
    case FALHA:
      return {
        ...state,
        erro: action.erro,
      };
    default:
      return state;
  }
};

export default dataReducer;
