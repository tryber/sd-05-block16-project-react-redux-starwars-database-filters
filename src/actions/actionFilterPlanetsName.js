export const FILTER_NAME_PLANET = 'FILTER_NAME_PLANET';
export const FILTER_VALUES = 'FILTER_VALUES';
export const SET_VALUE_OPTIONS = 'SET_VALUE_OPTIONS';

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

export const setValueOptions = (options) => ({
  type: SET_VALUE_OPTIONS,
  options,
});
