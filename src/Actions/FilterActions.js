export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const RESET_FILTER_BY_NAME = 'RESET_FILTER_BY_NAME';
export const SEND_FILTER = 'SEND_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export const sendFilter = (payload) => ({
  type: SEND_FILTER,
  payload,
});

export const resetFilterByName = () => ({
  type: FILTER_BY_NAME,
});

export const removeFilter = (payload) => ({
  type: REMOVE_FILTER,
  payload,
});
