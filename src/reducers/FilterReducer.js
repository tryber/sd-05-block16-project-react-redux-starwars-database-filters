import {
  FILTER_BY_NAME,
} from '../actions/index';


const FILTER_INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

const FilterReducer = (state = FILTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return { ...state, filterByName: { name: action.name } };
    default:
      return state;
  }
};

export default FilterReducer;
