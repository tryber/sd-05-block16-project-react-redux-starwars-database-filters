import { RP_SUCESS, RP_FAILED, REQUEST_PLANETS } from '../actions/index';

const INITIAL_STATE = {
  data: '',
  fetching: true,
};
// Ajustado de acordo com a estrutura certa passada
// pelos colegas no slack (Juliette).

const emptyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        fetching: true,
      };
    case RP_SUCESS:
      return {
        ...state,
        fetching: false,
        data: action.data,
      };
    case RP_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default emptyReducer;
