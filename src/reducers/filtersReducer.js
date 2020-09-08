import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES } from '../actions/actionFilter';

const INITIAL_FILTER = {
  filterByName: { name: '' },
  filterByNumericValues: [
    { column: 'surface_water', comparison: 'menor que', value: '40' },
    { column: 'diameter', comparison: 'maior que', value: '8900' },
    { column: 'population', comparison: 'igual a', value: '200000' },
  ],
};

const filters = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.results },
      };
    case FILTER_BY_NUMERIC_VALUES:
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
        // selectedOption: state.selectedOption.filter((option) => option !== action.column),
      };
    default:
      return state;
  }
};

export default filters;
