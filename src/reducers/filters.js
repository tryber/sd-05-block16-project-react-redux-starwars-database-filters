import { NAME, COLUMN, REMOVE, ORDER } from '../actions/index';

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        filterByName: { name: action.filters.filterByName.name },
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
          },
        ],
      };
    case REMOVE:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((item, index) => index !== action.index),
        ],
      };
    case ORDER:
      return { ...state, order: { column: action.column, sort: action.order } };
    default:
      return state;
  }
};

export default filters;
