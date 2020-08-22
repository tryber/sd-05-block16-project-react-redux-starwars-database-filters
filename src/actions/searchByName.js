export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';

const searchByName = (name) => ({
  type: SEARCH_BY_NAME,
  name,
});

export default searchByName;
