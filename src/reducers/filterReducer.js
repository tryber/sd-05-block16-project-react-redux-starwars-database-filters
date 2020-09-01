import { FILTER_NAME, FILTER_VALUES } from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    case FILTER_VALUES:
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

    default:
      return state;
  }
}

export default filters;
