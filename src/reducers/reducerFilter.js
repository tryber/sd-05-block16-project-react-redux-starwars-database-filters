import { FILTER_NAME_PLANET, FILTER_VALUES, SET_VALUE_OPTIONS } from '../actions/actionFilterPlanetsName';

const STATE_INICIAL = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  options: [],
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
      };
    case SET_VALUE_OPTIONS:
      return {
        ...state,
        options: [
          ...state.options,
          {
            population: action.population,
            orbital_period: action.orbital_period,
            diameter: action.diameter,
            rotation_period: action.rotation_period,
            surface_water: action.surface_water,
          }
        ],
      };
    default:
      return state;
  }
};

export default ReducerFilter;
