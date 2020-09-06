const INITIAL_STATE = {
  column: 'Name',
  sort: 'ASC',
};

function changeASC(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ASC_SORT_CHANGE':
      return {
        ...state,
        sort: action.payload,
      };
    case 'ASC_NAME_CHANGE':
      return {
        ...state,
        column: action.payload,
      };
    default:
      return state;
  }
}

export default changeASC;
