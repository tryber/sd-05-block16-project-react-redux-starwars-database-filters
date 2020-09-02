import { FILTER_NAME, FILTER_VALUES, REMOVE_FILTER } from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

/* const handleClick = (state, action) => {
  const index = [state].findIndex((filter) => filter.column === action);
  const newState = [...state];
  newState.splice(index, 1);
  return { [state]: newState };
}; */

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
      // lógica de remoção consultada no repositório do Lucas Allan
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues
          .filter((filter) => filter.column !== action.column),
      };

    default:
      return state;
  }
}

export default filters;
