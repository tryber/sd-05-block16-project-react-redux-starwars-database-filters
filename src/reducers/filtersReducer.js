import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES } from '../actions/actionFilter';

const INITIAL_FILTER = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const filterByName = (state = INITIAL_FILTER, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.results },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [action.results],
      }
    default:
      return state;
  }
};

// const filterByNumericValues = (state = INITIAL_FILTER, action) => {
//   switch (action.type) {
//     case FILTER_BY_NUMERIC_VALUES:
//       return {
//         ...state,
//         filterByNumericValues: [{
//           column,
//           comparison,
//           value: action.results,
//         }]
//       }
//   }
// }

export default filterByName;
