import {
  SEARCH_FILTER, TOTAL_FILTER,
} from '../actions';

const filterInitial = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};
const filters = (state = filterInitial, action) => {
  switch (action.type) {
    case SEARCH_FILTER:
      return {
        ...state,
        filterByName: {
          name: action.payload,
        },
      };
    case TOTAL_FILTER:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.payload],
      };
    default:
      return state;
  }
};


export default filters;
