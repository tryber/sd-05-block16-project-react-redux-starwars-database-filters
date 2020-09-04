const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  column: 'population',
  comparison: 'maior que',
  value: 1000,
};

function filterByName(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FILTER_NAME':
      return { ...state, filterByName: { name: action.payload } };
    case 'FILTER_NUMERIC':
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
    case 'COLUMN_FILTER':
      return { ...state, column: action.payload };
    case 'COMPARISON_FILTER':
      return { ...state, comparison: action.payload };
    case 'VALUE_FILTER':
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

export default filterByName;
