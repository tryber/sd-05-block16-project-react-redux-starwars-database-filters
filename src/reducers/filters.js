import { FILTER_DATA } from '../actions/index';
import { FILTER_COLUMN } from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
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
    case FILTER_COLUMN:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { column: action.column,
            comparison: action.comparison,
            value: action.value },
        ],
      };

    default:
      return state;
  }
}
