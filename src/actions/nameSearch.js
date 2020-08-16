export const NAME_SEARCH = 'NAME_SEARCH';

const nameSearch = (name) => ({
  type: NAME_SEARCH,
  name,
});

export default nameSearch;
