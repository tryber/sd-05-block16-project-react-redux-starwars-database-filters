const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
  ordenacaoAtivada: true,
};

const filters = (state = INITIAL_STATE, action) => {
  /* console.log(action) */
  switch (action.type) {
    case 'FILTRO_POR_NOME':
      return {
        ...state,
        filterByName: { name: action.payload },
      };
    case 'FILTRO_COMPLETO':
      /* console.log(action.obj) */
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.obj],
      };
    case 'REMOVE_FILTRO':
      return {
        ...state,
        filterByNumericValues: state.filterByNumericValues.filter(
          (filtro) => filtro.column !== action.nomeDoFiltroClicado,
        ),
      };
    case 'ORDENA_TITULO':
      return {
        ...state,
        order: action.obj,
        ordenacaoAtivada: true,
      };
    default:
      return state;
  }
};

export default filters;
