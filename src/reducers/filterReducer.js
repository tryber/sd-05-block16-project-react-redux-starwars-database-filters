import { FILTER_BY_NAME } from '../actions';

const initialState = {
  filterByName: { name: '' },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.payload },
      };
    default:
      return state;
  }
};

export default filters;
