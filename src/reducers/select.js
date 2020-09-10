const INITIAL_STATE = {
  column: '',
  comparison: '',
  value: '',
};

const select = (state = INITIAL_STATE, action) => {
  /* console.log(action) */
  switch (action.type) {
    case 'SELECIONAR_VALORES':
      return {
        ...state,
        filterByName: { name: action.payload },
      };
    case 'SELECIONAR_TITULO':
      return {
        ...state,
        column: action.coluna,
      };
    case 'SELECIONAR_COMPARACAO':
      return {
        ...state,
        comparison: action.comparacao,
      };
    case 'FILTRO_POR_NUMERO':
      return {
        ...state,
        value: action.valor,
      };
    default:
      return state;
  }
};

export default select;
