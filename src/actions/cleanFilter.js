export const CLEAN_FILTER = 'CLEAN_FILTER';

const cleanFilter = (column, comparison, value) => ({
  type: CLEAN_FILTER,
  column,
  comparison,
  value,
});

export default cleanFilter;
