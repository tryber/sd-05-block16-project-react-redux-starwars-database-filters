const INITIAL_STATE = {
  columnOption: [
    'coluna',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ],
};

function filtersRemoveReturn(state = INITIAL_STATE, action) {
  switch (action.type) {
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

export default filtersRemoveReturn;
