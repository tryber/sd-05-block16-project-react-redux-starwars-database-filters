export const SELECTED_COLUMN_ORDER = 'SELECTED_COLUMN_ORDER';
export const SELECTED_COMPARISON_ORDER = 'SELECTED_COMPARISON_ORDER';
export const FILTER_ORDER = 'FILTER_ORDER';

export function columnAddedOrder(value) {
  return ({
    type: SELECTED_COLUMN_ORDER, value,
  });
}

export function orderAdded(value) {
  return ({
    type: SELECTED_COMPARISON_ORDER, value,
  });
}

export function filterOrder() {
  return ({
    type: FILTER_ORDER,
  })
}