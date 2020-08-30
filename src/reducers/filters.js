import { NAME, COLUMN } from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        filterByName: {
          name: action.filters.filterByName.name,
        },
      };
    case COLUMN:
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
};

export default filters;
