import ACTIONS from '../actions';

const INITIALSTATE = {
  data: [],
  isLoading: true,
};

/* CONSULTEI REPO DO COLEGA DE TURMA - FELIPE VIEIRA PARA TENTAR ENXERGAR
MELHOR LÓGICA DESSE REDUCER */

// tenho ainda que implementar o isLoading

const reduceApi = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.RECEIVE_API:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reduceApi;
