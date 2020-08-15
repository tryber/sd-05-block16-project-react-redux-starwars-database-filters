export const FILTER_BY_NAME = 'FILTER_BY_NAME';

const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  filterByName: { name },
});

export default filterByName;
