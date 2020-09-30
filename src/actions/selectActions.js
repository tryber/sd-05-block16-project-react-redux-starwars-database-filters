export const SELECTED_COLUMN = 'SELECTED_COLUMN';
export const SELECTED_COMPARISON = 'SELECTED_COMPARISON';
export const SELECTED_NUMBER = 'SELECTED_NUMBER';

export function columnAdded(value) {
  return ({
    type: SELECTED_COLUMN, value,
  });
}

export function comparisonAdded(value) {
  return ({
    type: SELECTED_COMPARISON, value,
  });
}

export function numberAdded(value) {
  return ({
    type: SELECTED_NUMBER, value,
  });
}
