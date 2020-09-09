export const FILTER_NAME_PLANET = 'FILTER_NAME_PLANET';
export const FILTER_VALUES = 'FILTER_VALUES';
export const SET_VALUE_OPTIONS = 'SET_VALUE_OPTIONS';
export const REMOVE_FILTRO = 'REMOVE_FILTRO';
export const ORDENAR_COLUMNS = 'ORDENAR_COLUMNS';

export const filtrarPlanetsName = (name) => ({
  type: FILTER_NAME_PLANET,
  name,
});

export const filterValues = (column, comparison, value) => ({
  type: FILTER_VALUES,
  column,
  comparison,
  value,
});

export const setValueOptions = (options) => ({
  type: SET_VALUE_OPTIONS,
  options,
});

export const removerFiltroDaTela = (column) => ({
  type: REMOVE_FILTRO,
  column,
});

export const ordenarColumns = (column, sort) => ({
  type: ORDENAR_COLUMNS,
  column,
  sort,
});
