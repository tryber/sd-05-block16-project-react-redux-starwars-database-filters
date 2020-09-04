import ACTIONS from '../action';

const INITIAL_STATE = {
  data: [],
  isFetching: true,
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function apiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.CARREGANDO_API:
      return { ...state, isFetching: action.isFetching };
    case ACTIONS.SUCESSO_API:
      return { ...state, isFetching: action.isFetching, data: action.data };
    case ACTIONS.FILTRAR_NOMES:
      return { ...state, filters: { filterByName: { name: action.name } } };
    default:
      return state;
  }
}

export default apiReducer;
