import { FILTER_BY_NAME, FILTER_BY_COLUMN, FILTER_BY_COMPARISON, FILTER_BY_VALUE, FILTER_BY_NUMBERS } from './types';

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const filterByColumn = (column) => ({
  type: FILTER_BY_COLUMN,
  column,
});

export const filterByComparison = (comparison) => ({
  type: FILTER_BY_COMPARISON,
  comparison,
});

export const filterByValue = (value) => ({
  type: FILTER_BY_VALUE,
  value,
});

export const filterByNumbers = (column, comparison, value) => ({
  type: FILTER_BY_NUMBERS,
  column,
  comparison,
  value,
});
