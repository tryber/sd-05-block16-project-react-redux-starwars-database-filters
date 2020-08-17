import { combineReducers } from 'redux';
import { SEARCH_PLANET, SEARCH_SUCCESS } from '../actions/index';

const initialState = {
  isLoading: false,
  data: [],
};


function planetReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PLANET:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_SUCCESS:
      console.log(action);
      return {
        ...state,
        isLoading: action.loading,
        data: action.data,
      };
    default:
      return state;
  }
}

// const rootReducer = combineReducers({ planetReducer });
const rootReducer = planetReducer;

export default rootReducer;
