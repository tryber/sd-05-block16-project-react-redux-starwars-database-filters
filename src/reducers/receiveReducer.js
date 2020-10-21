import { CASE_SUCESS, CASE_FAILED, REQPLANETS } from '../actions/index';

const INIT_STATE = {
  data: '',
  fetching: true,
};
// estado inicil para evitar bugs estados

const emptyReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case REQPLANETS:
      return {
        ...state,
        fetching: true,
      };
    case CASE_SUCESS:
      return {
        ...state,
        fetching: false,
        data: action.data,
      };
    case CASE_FAILED:
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
