import {
  AQUISICAO,
  AQUISICAO_CERTO,
  FILTER_BY_NAME,
  FILTER_BY_NUMERIC_VALUES,
  ATUALIZA_FILTER_BY_NUM,
  COLUMN,
  COMPARISON,
  NUMBER,
  ORDER_COLUMN,
  ORDER_SORT,
  ORDER_FILTER,
} from '../actions/index';

const initialState_api = {
  isLoading: false,
  data: [],
};

const initialState_filters = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

const initialState_select = {
  column: '',
  comparison: '',
  value: '',
};

const initialState_sort = {
  column: '',
  sort: '',
};

export const apiReducer = (state = initialState_api, action) => {
  switch (action.type) {
    case AQUISICAO:
      return {
        ...state,
        isLoading: true,
      };
    case AQUISICAO_CERTO:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const filters = (state = initialState_filters, action) => {
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.resultado,
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues, action.resultado],
      };
    case ATUALIZA_FILTER_BY_NUM:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues.filter((item) => item !== action.resultado),
        ],
      };
    case ORDER_FILTER:
      return {
        ...state,
        order: { column: action.resultado.column, sort: action.resultado.sort },
      };
    default:
      return state;
  }
};

export const selectReducer = (state = initialState_select, action) => {
  switch (action.type) {
    case COLUMN:
      return {
        ...state,
        column: action.resultado,
      };
    case COMPARISON:
      return {
        ...state,
        comparison: action.resultado,
      };
    case NUMBER:
      return {
        ...state,
        value: action.resultado,
      };
    default:
      return state;
  }
};

export const sortReducer = (state = initialState_sort, action) => {
  switch (action.type) {
    case ORDER_COLUMN:
      return {
        ...state,
        column: action.resultado.charAt(0).toUpperCase() + action.resultado.slice(1),
      };
    case ORDER_SORT:
      return {
        ...state,
        sort: action.resultado,
      };
    default:
      return state;
  }
};
