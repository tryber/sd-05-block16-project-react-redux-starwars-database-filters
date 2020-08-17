import { NAME_SEARCH } from '../actions/nameSearch';
import { NUMERIC_SEARCH } from '../actions/numericSearch';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_SEARCH:
      return ({
        ...state,
        filterByName: {
          ...state.filterByName,
          name: action.name,
        },
      });
    case NUMERIC_SEARCH:
      return ({
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      });
    default:
      return state;
  }
};

export default filters;
