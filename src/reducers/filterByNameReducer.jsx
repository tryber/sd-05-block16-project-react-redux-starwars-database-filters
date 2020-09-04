import { FILTER_BY_NAME } from '../actions/';

const INTITAL_STATE_FILTER = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const filterReducer = (state = INTITAL_STATE_FILTER, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.name },
      };
    default:
      return state;
  }
};

export default filterReducer;
