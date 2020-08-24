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
        filterByNumericValues: [{
          column: action.filterByNumericValues[0].column,
          comp: action.filterByNumericValues[0].comp,
          value: action.filterByNumericValues[0].value,
        }],
      };
    default:
      return state;
  }
};

export default filters;
