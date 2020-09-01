import { FILTER_NAME_PLANET, FILTER_VALUES, SET_VALUE_OPTIONS } from '../actions/actionFilterPlanetsName';

const STATE_INICIAL = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  columns: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
  ],
};

const ReducerFilter = (state = STATE_INICIAL, action) => {
  console.log('action reducer', action);
  switch (action.type) {
    case FILTER_NAME_PLANET:
      return {
        ...state,
        filterByName: {
          name: action.value,
        },
      };
    case FILTER_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
        columns: state.columns.filter((column) => column !== action.column)
      };
    default:
      return state;
  }
};

export default ReducerFilter;
