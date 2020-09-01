export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NUMERIC_VALUES = 'FILTER_BY_NUMERIC_VALUES';

export const filterPlanet = (nome) => ({
  type: FILTER_BY_NAME,
  results: nome,
});

export const filterByNumber = (filtro) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  results: filtro,
});
