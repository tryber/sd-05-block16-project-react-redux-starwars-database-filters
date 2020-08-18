import {
  FILTER_BY_NAME,
  NUMERIC_FILTER,
  DELETE_FILTER,
} from '../actions/index';


const FILTER_INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const filters = (state = FILTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.name } };
    case NUMERIC_FILTER:
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
    case DELETE_FILTER:
      return {
        ...state, filterByNumericValues: [...action.newFilter],
      };
    default:
      return state;
  }
};

export default filters;
