import {
  SEARCH_FILTER,
} from '../actions';

const filterInitial = {
  filterByName: {
    name: '',
  },
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
    default:
      return state;
  }
};


export default filters;
