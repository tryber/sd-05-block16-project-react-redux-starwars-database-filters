import ACTIONS from '../action';

const INITIAL_STATE = {
  data: [],
  isFetching: true,
};

function apiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.CARREGANDO_API:
      return { ...state, isFetching: action.isFetching };
    case ACTIONS.SUCESSO_API:
      return { ...state, isFetching: action.isFetching, data: action.data };
    default:
      return state;
  }
}

export default apiReducer;
