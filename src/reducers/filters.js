import { FILTER_DATA } from '../actions/index';
import { FILTER_COLUMN } from '../actions/index';
import { DELETE_ITEM } from '../actions/index';
import { SORT_COLUMN } from '../actions/index';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

export default function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_DATA:
      return { ...state,
        filterByName: {
          name: action.payload,
        } };
    case FILTER_COLUMN:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues,
          { column: action.column,
            comparison: action.comparison,
            value: action.value }],
      };
    case DELETE_ITEM:
      return { ...state,
        filterByNumericValues:
          state.filterByNumericValues.filter((item, index) => index !== action.payload),
      };
    case SORT_COLUMN:
      return {
        ...state,
        order: {
          column: action.column,
          sort: action.sort,
        },
      };

    default:
      return state;
  }
}
