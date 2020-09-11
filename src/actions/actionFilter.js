export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const FILTER_ORDER = 'FILTER_ORDER';

export const filterPlanet = (nome) => ({
  type: FILTER_BY_NAME,
  results: nome,
});

export const filterByNumber = (column, comparison, value) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  column,
  comparison,
  value,
});

export const removeClick = (column) => ({
  type: REMOVE_FILTER,
  column: column.target.id,
});

export const filterOrder = (order) => ({
  type: FILTER_ORDER,
  order,
});
