import {
  SUCESSO,
  FALHA,
  CARREGANDO,
  NEW_FILTER,
} from '../actions/dataAction';

const INICIAL_STATE = {
  isFetching: true,
  planetas: [],
  erro: '',
  filterByName: { name: '' },
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
    case NEW_FILTER:
      return {
        ...state,
        filterByName: { name: action.value },
      };
    default:
      return state;
  }
};

export default dataReducer;
