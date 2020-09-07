import {
  SUCESSO,
  FALHA,
  CARREGANDO,
  NEW_FILTER,
  FILTRAR,
} from '../actions/dataAction';
import {
  SELECTED_COLUMN,
  SELECTED_COMPARISON,
  SELECTED_NUMBER,
} from '../actions/selectActions';

const INICIAL_STATE = {
  isFetching: true,
  planetas: [],
  erro: '',
  filterByName: { name: '' },
  filterByNumericValues: [],
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

const AgradoAoCC = (state) => {
  console.log(state)
  const { comparison, column, value, filterByNumericValues } = state;
  if (filterByNumericValues.length === 0) {
    return ({
      ...state, filterByNumericValues: [{ comparison, value, column }],
    });
  }
  return {
    ...state, filterByNumericValues: [...filterByNumericValues, { comparison, value, column }],
  };
}

const dataReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case SUCESSO:
      return { ...state, planetas: action.data, isFetching: false };
    case CARREGANDO:
      return { ...state };
    case FALHA:
      return { ...state, erro: action.erro };
    case NEW_FILTER:
      return { ...state, filterByName: { name: action.value } };
    case FILTRAR:
      return AgradoAoCC(state);
    case SELECTED_COLUMN:
      return { ...state, column: action.value };
    case SELECTED_COMPARISON:
      return { ...state, comparison: action.value };
    case SELECTED_NUMBER:
      return { ...state, value: action.value };
    default:
      return state;
  }
};

export default dataReducer;
