const INITIAL_FILTER = {
  filterByName: { name: '' },
};

const filterByName = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case 'FILTER_BY_NAME':
      return {
        ...state,
        filterByName: { name: action.results },
      };
    default:
      return state;
  }
};

export default filterByName;
