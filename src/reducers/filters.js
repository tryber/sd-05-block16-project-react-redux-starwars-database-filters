import { NAME_SEARCH } from '../actions/nameSearch';

const INITIAL_STATE = {
    filterByName: {
      name: '',
      // catchoro: '',
    },
    // teste: '',
};

const filters = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NAME_SEARCH:
      return ({
        ...state,
        filterByName: {
          ...state.filterByName,
          name: action.name,
        },
      });
    default:
      return state;
  }
};

export default filters;
