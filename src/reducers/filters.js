import { SEARCH_FILTER } from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

export default function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_FILTER:
      return {
        ...state,
        filterByName: {
          name: action.payload,
        },
      };
    default:
      return state;
  }
}