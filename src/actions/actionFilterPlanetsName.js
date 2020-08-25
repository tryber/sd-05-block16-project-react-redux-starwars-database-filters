export const FILTER_NAME_PLANET = 'FILTER_NAME_PLANET';
export const FILTER_VALUES = 'FILTER_VALUES';

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
