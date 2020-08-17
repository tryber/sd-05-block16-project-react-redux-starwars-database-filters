import { FILTER_BY_NAME,
  FILTER_BY_COLUMN,
  FILTER_BY_COMPARISON,
  FILTER_BY_VALUE,
  FILTER_BY_NUMBERS,
} from '../actions/types';

const INITIAL_STATE = {
  filterByName: {
    name: '',
  },
  numericValues: {
    column: '',
    comparison: '',
    value: '',
  },
  filterByNumericValues: [],
};

const filters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state, filterByName: { name: action.name },
      };
    case FILTER_BY_COLUMN:
      return { ...state,
        numericValues: { ...state.numericValues, column: action.column },
      };
    case FILTER_BY_COMPARISON:
      return { ...state,
        numericValues: { ...state.numericValues, comparison: action.comparison },
      };
    case FILTER_BY_VALUE:
      return { ...state,
        numericValues: { ...state.numericValues, value: action.value },
      };
    case FILTER_BY_NUMBERS:
      return { ...state,
        filterByNumericValues: [...state.filterByNumericValues,
          { column: action.column, comparison: action.comparison, value: action.value },
        ],
      };
    default:
      return state;
  }
};

export default filters;
