import { combineReducers } from 'redux';
import { AQUISICAO, CERTO } from '../actions/index';

const initialState = {
  isLoading: false,
  planets: [],
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case AQUISICAO:
      return {
        ...state,
        isLoading: true,
      };
    case CERTO:
      return {
        ...state,
        isLoading: false,
        planets: action.planets,
      };
    default:
      return state;
  }
};

const emptyReducer = combineReducers({
  planReducer,
});

export default emptyReducer;
