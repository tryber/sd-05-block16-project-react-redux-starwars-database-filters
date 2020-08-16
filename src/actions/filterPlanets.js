import { FILTER_BY_NAME } from './types';

const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

export default filterByName;
