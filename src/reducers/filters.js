import { NAME, COLUMN, REMOVE, ORDEM } from '../actions/index';

const INIT_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
};
//estado inicil para não bugar os estados 

const Rfiltros = (state = INIT_STATE, action) => {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        filterByName: { name: action.filters.filterByName.name },
      };
    case COLUMN:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          {
            column: action.column,
            comparison: action.comparison,
            value: action.value,
          },
        ],
      };
    case REMOVE:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((item, index) => index !== action.index),
        ],
      };
    case ORDEM:
      return { ...state, order: { column: action.column, sort: action.order } };
    default:
      return state;
  }
};

export default Rfiltros;
