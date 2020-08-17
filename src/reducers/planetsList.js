// Referencia:
// https://github.com/tryber/sd-05-live-lectures/blob/react-redux-pt2/iss/src/reducers/issLocation.js

import {
  PLANET_LIST_REQUEST_SUCCESS,
  PLANET_LIST_REQUEST_FAILURE,
  PLANET_LIST_REQUEST,
} from '../actions';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
};

const planetsList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLANET_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case PLANET_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case PLANET_LIST_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default planetsList;
