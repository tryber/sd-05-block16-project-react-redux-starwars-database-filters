const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  column: 'population',
  comparison: 'maior que',
  value: 1000,
};

function filterNumeric(
  state = INITIAL_STATE,
  { type, payload, column, comparison, value }
) {
  const FILTER_NAME = { ...state, filterByName: { name: payload } };
  const COLUMN_FILTER = { ...state, column: payload };
  const COMPARISON_FILTER = { ...state, comparison: payload };
  const VALUE_FILTER = { ...state, value: payload };
  const REMOVE_FILTER = {
    ...state,
    filterByNumericValues: [
      ...state.filterByNumericValues.filter((f) => f.column !== payload),
    ],
  };
  const FILTER_NUMERIC = {
    ...state,
    filterByNumericValues: [
      ...state.filterByNumericValues,
      { column, comparison, value },
    ],
  };

  if (type === 'FILTER_NAME') {
    return FILTER_NAME;
  } else if (type === 'COLUMN_FILTER') {
    return COLUMN_FILTER;
  } else if (type === 'FILTER_NUMERIC') {
    return FILTER_NUMERIC;
  } else if (type === 'COMPARISON_FILTER') {
    return COMPARISON_FILTER;
  } else if (type === 'VALUE_FILTER') {
    return VALUE_FILTER;
  } else if (type === 'REMOVE_FILTER') {
    return REMOVE_FILTER;
  }
  return state;
}

export default filterNumeric;
