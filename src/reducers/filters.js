const INITIAL_STATE = {
  filterByName: { name: '' },
};

const filters = (state = INITIAL_STATE, action) => {
  /* console.log(action) */
  switch (action.type) {
    case 'FILTRO_POR_NOME':
      return {
        ...state,
        filterByName: { name: action.payload },
      };
    default:
      return state;
  }
};

export default filters;
