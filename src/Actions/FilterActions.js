export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const RESET_FILTER_BY_NAME = 'RESET_FILTER_BY_NAME';

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const resetFilterByName = () => ({
  type: FILTER_BY_NAME,
});
