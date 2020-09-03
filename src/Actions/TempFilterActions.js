export const ADD_FILTER = 'ADD_FILTER';
export const RESET_FILTER_TO_SEND = 'RESET_FILTER_TO_SEND';
export const TOGGLE_RENDER = 'TOGGLE_RENDER';

export const addFilter = (payload) => ({
  type: ADD_FILTER,
  payload, // { column, comparison, value }
});

export const resetFilterToSend = () => ({
  type: RESET_FILTER_TO_SEND,
});

export const toggleRender = (payload) => ({
  type: TOGGLE_RENDER,
  payload,
});
