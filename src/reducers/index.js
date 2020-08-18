import { combineReducers } from 'redux';
import Actions from '../Actions/actions';

const initialState = {
  filterByName: {
    name: '',
  },
  isLoading: true,
  data: [],
  erro: '',
};

function filters(state = initialState, action) {
  switch (action.type) {
    case (Actions.APPLY_FILTER):
      return {
        ...state,
        filterByName: {
          name: action.filter,
        },
      };
    case (Actions.REQUEST):
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case (Actions.REQUEST_SUCESS):
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
      };
    case (Actions.REQUEST_FAIL):
      return {
        ...state,
        erro: action.payload,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}


export default combineReducers({ filters });
