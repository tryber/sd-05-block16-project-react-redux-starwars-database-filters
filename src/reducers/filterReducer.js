import { FILTER_NAME } from '../actions';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_NAME:
      return { filters: { filterByName: { name: action.name } } };
    default:
      return state;
  }
}

export default filterReducer;
