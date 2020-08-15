import { FILTER_DATA } from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

export default function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_DATA:
      return {
        ...state,
        filterByName: {
          name: action.payload,
        },
      };
    default:
      return state;
  }
}
