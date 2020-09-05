const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
};

function filterByName(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FILTER_NAME':
      return { ...state, filterByName: { name: action.payload } };
    default:
      return state;
  }
}

export default filterByName;
