import { FILTER_NAME } from '../actions';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: { ...state.filterByName, name: action.name },
        },
      };
    default:
      return state;
  }
}

export default filters;
