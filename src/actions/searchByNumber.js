export const SEARCH_BY_NUMBER = 'SEARCH_BY_NUMBER';

const searchByNumber = ({ column, comparison, value }) => ({
  type: SEARCH_BY_NUMBER,
  column,
  comparison,
  value,
});

export default searchByNumber;
