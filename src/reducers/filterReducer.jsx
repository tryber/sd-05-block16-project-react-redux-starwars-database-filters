import { FILTER_BY_NAME, FILTER_BY_NUMBERS, REMOVE_FILTER, ORDER_FILTER } from '../actions/';

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
    case FILTER_BY_NUMBERS:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filterByNumericValues: action.list,
      };
    case ORDER_FILTER:
      return {
        ...state,
        order: action.order,
      };
    default: return state;
  }
};

export default filterReducer;
