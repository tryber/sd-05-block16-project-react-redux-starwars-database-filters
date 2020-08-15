import { combineReducers } from 'redux';

import { FETCH_PLANETS, FETCH_RESOLVE, FETCH_REJECT } from '../actions/types';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_RESOLVE:
      return {
        ...state,
        isLoading: false,
        data: [...action.payload],
      };

    case FETCH_REJECT:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({ planetReducer });

export default rootReducer;
