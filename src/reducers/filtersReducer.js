import { TEXT_INPUT, NUMBER_FILTER, DELETE_FILTER } from '../actions';

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
    case DELETE_FILTER:
      // Referência
      // https://stackoverflow.com/questions/34582678/is-this-the-correct-way-to-delete-an-item-using-redux
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.slice(0, action.item),
          ...state.filterByNumericValues.slice(action.item + 1, state.filterByNumericValues.length),
        ],
      };
    default:
      return state;
  }
}

export default filters;
