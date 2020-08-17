export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_NV = 'FILTER_BY_NV';

export const filterByName = (input) => ({
  type: FILTER_BY_NAME,
  input,
});

export const filterByNumericValues = (values) => ({
  type: FILTER_BY_NV,
  values,
});

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
  //  {
  //    column: 'population',
  //    comparison: 'maior que',
  //    value: '100000',
  //  }
  ]
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: { name: action.input } };
    case FILTER_BY_NV:
      return {
        ...state,
        filterByNumericValues: [
        ...state.filterByNumericValues,
        action.values
      ]
      };
    default:
      return state;
  }
}

export default filters;
// {
//     filters: {
//       filterByName: {
//         name: 'Tatoo'
//       }
//     }
//   }
