import { TEXT_INPUT, NUMBER_FILTER } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = initialState, action) {
  switch (action.type) {
    case TEXT_INPUT:
      return {
        ...state,
        filterByName: { name: action.textInput },
      };
    case NUMBER_FILTER:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    default:
      return state;
  }
}

export default filters;
