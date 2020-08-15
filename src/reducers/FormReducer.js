import { QUERY_FORM, QUERY_SELECTOR } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_FORM:
      return { ...state, filterByName: { name: action.name } };
    case QUERY_SELECTOR:
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
    default:
      return state;
  }
};

export default FormReducer;
