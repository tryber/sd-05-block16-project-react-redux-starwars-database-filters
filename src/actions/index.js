import endpoint from '../service/api';

export const AQUISICAO = 'AQUISICAO';
export const AQUISICAO_CERTO = 'AQUISICAO_CERTO';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const ATUALIZA_FILTER_BY_NUM = 'ATUALIZA_FILTER_BY_NUM';
export const COLUMN = 'COLUMN';
export const COMPARISON = 'COMPARISON';
export const NUMBER = 'NUMBER';
export const ORDER_COLUMN = 'ORDER_COLUMN';
export const ORDER_SORT = 'ORDER_SORT';
export const ORDER_FILTER = 'ORDER_FILTER';

const aquisicao = () => ({
  type: AQUISICAO,
});

const aquisicaoCerto = (json) => ({
  type: AQUISICAO_CERTO,
  data: json.results,
});

export function funcaoApi() {
  return (dispatch) => {
    dispatch(aquisicao());

    return endpoint().then((json) => dispatch(aquisicaoCerto(json)));
  };
}

export const filterByName = (resultado) => ({
  type: FILTER_BY_NAME,
  resultado,
});

export const filterByNumericValues = (resultado) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  resultado,
});

export const numericFilters = (resultado) => ({
  type: ATUALIZA_FILTER_BY_NUM,
  resultado,
});

export const selectColumn = (resultado) => ({
  type: COLUMN,
  resultado,
});

export const selectComparison = (resultado) => ({
  type: COMPARISON,
  resultado,
});

export const selectNumber = (resultado) => ({
  type: NUMBER,
  resultado,
});

export const updateOrderColumn = (resultado) => ({
  type: ORDER_COLUMN,
  resultado,
});

export const updateOrderSort = (resultado) => ({
  type: ORDER_SORT,
  resultado,
});

export const updateOrderFilter = (resultado) => ({
  type: ORDER_FILTER,
  resultado,
});
