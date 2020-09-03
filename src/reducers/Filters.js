import {
  FILTER_BY_NAME,
  RESET_FILTER_BY_NAME,
  SEND_FILTER,
  REMOVE_FILTER,
  SET_SORT,
} from '../Actions';

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

const filterByName = (state, action) => ({
  ...state,

  filterByName: { name: action.name },
});

const resetFilter = (state) => ({
  ...state,
  filterByName: false,
});

const sendFilter = (state, action) => ({
  ...state,
  filterByNumericValues: [...state.filterByNumericValues, { ...action.payload }],
});

const removeFilter = (state, action) => ({
  ...state,
  filterByNumericValues: [
    ...state.filterByNumericValues.filter((_, index) => index !== action.payload),
  ],
});

const setSort = (state, payload) => {
  const newState = {
    ...state,
    order: {
      ...state.order,
      ...payload,
    },
  };
  return newState;
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return filterByName(state, action);
    case RESET_FILTER_BY_NAME:
      return resetFilter(state);
    case SEND_FILTER:
      return sendFilter(state, action);
    case REMOVE_FILTER:
      return removeFilter(state, action);
    case SET_SORT:
      return setSort(state, action.payload);

    default:
      return state;
  }
};

export default filters;
