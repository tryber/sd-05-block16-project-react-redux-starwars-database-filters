import { combineReducers } from 'redux';
import { SEARCH_PLANET, SEARCH_SUCCESS } from '../actions/index';
import filters from './filters';

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
      return {
        ...state,
        isLoading: action.loading,
        data: action.data,
      };
    default:
      return state;
  }
}

const reducer = combineReducers({ planetReducer, filters });
// const rootReducer = planetReducer;

export default reducer;
