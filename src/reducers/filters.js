import { FILTER_PLANET, FILTER_NUMBER, REMOVE_FILTER } from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  // console.log('received action on filter: ', action);
  switch (action.type) {
    case FILTER_PLANET:
      return {
        ...state, filterByName: { name: action.name },
      };
    case FILTER_NUMBER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, {
          column: action.column,
          comparison: action.comparison,
          value: action.value,
        }],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((filter) => filter !== action.erased),
        ],
      };
    default:
      return state;
  }
};

export default filters;
