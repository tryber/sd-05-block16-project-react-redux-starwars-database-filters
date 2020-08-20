export const FILTER_BY_NAME = 'FILTER_BY_NAME';

export const filterPlanet = (nome) => ({
  type: FILTER_BY_NAME,
  results: nome,
});
