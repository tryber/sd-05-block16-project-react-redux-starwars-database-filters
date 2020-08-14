import { QUERY_FORM } from '../actions';

const initialState = {
  filterByName: {
    name: '',
  },
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_FORM:
      return { ...state, filterByName: { name: action.name } };
    default: return state;
  }
};

export default FormReducer;
