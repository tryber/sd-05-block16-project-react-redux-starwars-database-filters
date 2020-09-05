import ACTIONS from '../action';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};


function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.FILTRAR_NOMES:
      return { ...state, filterByName: { name: action.name } };
    default:
      return state;
  }
}

export default filters;
