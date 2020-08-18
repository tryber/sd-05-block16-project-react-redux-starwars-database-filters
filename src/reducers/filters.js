import { FILTER_BY_NAME } from '../actions';

const INITIALSTATUS = {
  filterByName: {
    name: '',
  },
};

function filters(state = INITIALSTATUS, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state, filterByName: {name: action.name},
      };
    default:
      return state;
  }
}

export default filters;
