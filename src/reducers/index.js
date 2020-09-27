import {
    REQUEST_PLANETS,
    RECEIVED_PLANETS_SUCCESS,
    RECEIVED_PLANETS_FAIL,
} from '../components/actions/actions';

import {
  CHANGE_FILTERBYNAME,
  CHANGE_FILTERNUMERIC,
} from '../components/actions/actionsFilter';

const initialState = {
  isFetching: false,
  data: [],
  error: '',
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return { ...state, isFetching: true };
    case RECEIVED_PLANETS_SUCCESS:
      return { ...state, data: [...action.data.results], isFetching: false };
    case RECEIVED_PLANETS_FAIL:
      return { ...state, error: action.error, isFetching: false };
    case CHANGE_FILTERBYNAME:
      return { ...state,
        filters: {
          filterByName: { name: action.nameInput },
          filterByNumericValues: [{
            column: '',
            comparison: '',
            value: '',
          }] } };
    case CHANGE_FILTERNUMERIC:
      return { ...state,
        filters: {
          filterByName: { name: '' },
          filterByNumericValues: [...state.filters.filterByNumericValues, {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          }],
        },
      };
    default:
      return state;
  }
};

export default dataReducer;
