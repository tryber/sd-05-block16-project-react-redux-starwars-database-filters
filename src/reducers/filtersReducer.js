import { SEARCH_BY_NAME } from '../actions/searchByName';

const initialState = {
  filterByName: {
    name: '',
  },
};

function filters(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.name,
        },
      };
    default:
      return state;
  }
}

export default filters;
