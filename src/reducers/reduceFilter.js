import ACTIONS from '../actions';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

// Forma de fazer action by Zambelli 03/09/2020

const reduceFilters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FILTER_NAME:
      return {
        ...state,
        filterByName: { name: action.payload },
      };
    default:
      return state;
  }
};

export default reduceFilters;
