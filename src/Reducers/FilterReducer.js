import {
  FILTER_BY_NAME, RESET_FILTER_BY_NAME, SEND_FILTER, REMOVE_FILTER,
} from '../Actions';

const INITIAL_STATE = {
  filters: {
    filterByName: {
      name: false,
    },
    filterByNumericValues: [],
  },
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: action.name,
        },
      };
    case RESET_FILTER_BY_NAME:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByName: false,
        },
      };
    case SEND_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [...state.filters.filterByNumericValues, { ...action.payload }],
        },
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          filterByNumericValues: [
            ...state.filters.filterByNumericValues.filter((_, index) => index !== action.payload),
          ],
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
