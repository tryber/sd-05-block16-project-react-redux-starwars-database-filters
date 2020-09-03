import {
  FILTER_BY_NAME,
  FILTER_NUMBER,
  REMOVE_FILTER,
} from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.filter } };
    case FILTER_NUMBER:
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
    case REMOVE_FILTER: // based in: https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/blob/Marylange-react-redux-starwars-datatable-filters/src/reducers/reducerFilter.js
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues
            .filter((filtro) => filtro.column !== action.column),
        ],
      };
    default:
      return state;
  }
}

export default filters;
