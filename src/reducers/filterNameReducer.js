import { FILTER_BY_NAME } from '../actions';

const INITIALSTATUS = {
  nameInput: [],
};

function filterNameReducer(state = INITIALSTATUS, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state, name: [action.name],
      };
    default:
      return state;
  }
}

export default filterNameReducer;
