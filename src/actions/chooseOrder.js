export const CHOOSE_ORDER = 'CHOOSE_ORDER';

const chooseOrder = (column, sort) => ({
  type: CHOOSE_ORDER,
  column,
  sort,
});

export default chooseOrder;
