import { FILTER_COLUMN } from '../actions/index';

const INITIAL_STATE = [];

export default function filterByNumericValues(state =INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_COLUMN:
      return [ ...state,
      {
        column: action.column,
        comparison: action.comparison,
        value: action.value,
      }];
    default:
      return state;
  }
}