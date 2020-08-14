import {
  REQUEST_STARWARS,
  RECEIVE_STARWARS_SUCCESS,
  RECEIVE_STARWARS_FAILURE,
} from '../actions';

const INITIAL_STATE = {
  isFetching: false,
};

const starWars = ( state = {}, action ) => {
  console.log(action);

  switch(action.type) {
    case REQUEST_STARWARS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_STARWARS_SUCCESS:
      return {
        ...state,
        worlds: action.worlds,
        isFetching: false,
      }
    case RECEIVE_STARWARS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state,
  }
} 