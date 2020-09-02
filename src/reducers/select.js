const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const select = (state = INITIAL_STATE, action) => {
  /* console.log(action) */
  switch (action.type) {
    case 'SELECIONAR_VALORES':
      return {
        ...state,
        filterByName: { name: action.payload },
        filterByNumericValues:
          [{ column: action.payload, comparison: action.payload, value: action.payload }],
      };
    case 'SELECIONAR_TITULO':
      return {
        ...state,

      };
    default:
      return state;
  }
};

export default select;

