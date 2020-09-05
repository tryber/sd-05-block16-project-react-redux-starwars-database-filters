const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  column: 'population',
  comparison: 'maior que',
  value: 1000,
};

const filtro = (filter, action) => filter.column !== action.payload;

function filterNumeric(state = INITIAL_STATE, action) {
  if (action.type === 'FILTER_NUMERIC') {
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
  }
  if (action.type === 'FILTER_NAME')
    return { ...state, filterByName: { name: action.payload }};
  if (action.type === 'COLUMN_FILTER')
    return { ...state, column: action.payload };
  if (action.type === 'COMPARISON_FILTER')
    return { ...state, comparison: action.payload };
  if (action.type === 'VALUE_FILTER')
    return { ...state, value: action.payload };
  if (action.type === 'REMOVE_FILTER') {
    return {
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues.filter((f) => filtro(f, action)),
      ],
    };
  }
  return state;

}

export default filterNumeric;
