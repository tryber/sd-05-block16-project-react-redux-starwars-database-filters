import { FILTER_NAME_PLANET, FILTER_VALUES } from '../actions/actionFilterPlanetsName';

const STATE_INICIAL = {
  filters:
  {
    filterByName: {
      name: ''
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      }
    ]
  }
};

const filters = (state = STATE_INICIAL, action) => {
  // console.log('action reducer', action);
  switch (action.type) {
    case FILTER_NAME_PLANET:
      return {
        ...state,
        filters: {
          filterByName: {
            name: action.name,
          },
        }
      };
    case FILTER_VALUES:
      return {
        ...state,
        column: action.column,
        comparison: action.comparison,
        value: action.value,
      };
    default:
      return state;
  }
};

export default filters;
