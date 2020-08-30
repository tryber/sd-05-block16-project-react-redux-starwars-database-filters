export const FILTER_NAME_PLANET = 'FILTER_NAME_PLANET';
export const FILTER_VALUES = 'FILTER_VALUES';

export const filtrarPlanetsName = (value) => ({
  type: FILTER_NAME_PLANET,
  value,
});

export const filterValues = (column, comparison, value) => ({
  type: FILTER_VALUES,
  column,
  comparison,
  value,
});
