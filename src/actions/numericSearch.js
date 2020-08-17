export const NUMERIC_SEARCH = 'NUMERIC';

export const numericSearch = (column, comparison, value) => ({
  type: NUMERIC_SEARCH,
  column,
  comparison,
  value,
});
