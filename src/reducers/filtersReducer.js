import { SEARCH_BY_NAME } from '../actions/searchByName';
import { SEARCH_BY_NUMBER } from '../actions/searchByNumber';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
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
    case SEARCH_BY_NUMBER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          }],
      };
    default:
      return state;
  }
}

export default filters;
