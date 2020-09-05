const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  column: 'population',
  comparison: 'maior que',
  value: 1000,
};

function filterNumeric(state = INITIAL_STATE, { type, payload, column, comparison, value }) {
  if (type === 'FILTER_NUMERIC') {
    return {
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues, { column, comparison, value },
      ],
    };
  }
  if (type === 'FILTER_NAME') {
    return { ...state, filterByName: { name: payload } };
  } else if (type === 'COLUMN_FILTER') {
    return { ...state, column: payload };
  } else if (type === 'COMPARISON_FILTER') {
    return { ...state, comparison: payload };
  } else if (type === 'VALUE_FILTER') {
    return { ...state, value: payload };
  } else if (type === 'REMOVE_FILTER') {
    return {
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues.filter((f) => f.column !== payload),
      ],
    };
  }
  return state;
}

export default filterNumeric;
