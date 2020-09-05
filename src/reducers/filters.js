const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  column: 'population',
  comparison: 'maior que',
  value: 1000,
  columnOption: [
    'coluna',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};

function filterByName(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FILTER_NAME':
      return { ...state, filterByName: { name: action.payload } };
    case 'FILTER_NUMERIC':
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues, { column: action.column, comparison: action.comparison,
            value: action.value, },],
      };
    case 'COLUMN_FILTER':
      return { ...state, column: action.payload };
    case 'COMPARISON_FILTER':
      return { ...state, comparison: action.payload };
    case 'VALUE_FILTER':
      return { ...state, value: action.payload };
    case 'REMOVE_FILTER': // based in: https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/blob/Marylange-react-redux-starwars-datatable-filters/src/reducers/reducerFilter.js
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter(
            (filtro) => filtro.column !== action.payload,
          ),
        ],
      };
    case 'FILTER_COLUMN':
      return {
        ...state,
        columnOption: [
          ...state.columnOption.filter((filtro) => filtro !== action.payload),
        ],
      };
    case 'RETORNA_COLUMN':
      return {
        ...state,
        columnOption: [...state.columnOption, action.payload],
      };
    default:
      return state;
  }
}

export default filterByName;
