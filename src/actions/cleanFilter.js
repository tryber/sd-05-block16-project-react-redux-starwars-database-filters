export const CLEAN_FILTER = 'CLEAN_FILTER';

const cleanFilter = (column) => ({
  type: CLEAN_FILTER,
  column,
});

export default cleanFilter;
