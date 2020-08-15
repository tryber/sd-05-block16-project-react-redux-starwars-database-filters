export const FILTER_BY_NUMBER = 'FILTER_BY_NUMBER';

const filterByNumber = (column, comparison, value) => ({
  type: FILTER_BY_NUMBER,
  column,
  comparison,
  value,
});

export default filterByNumber;
