import {
  SUCESSO,
  FALHA,
  CARREGANDO,
  NEW_FILTER,
  FILTRAR,
} from '../actions/dataAction';
import { REMOVE_FILTER } from '../actions/filterRemover';
import colunas from '../services/colunas';
import {
  SELECTED_COLUMN,
  SELECTED_COMPARISON,
  SELECTED_NUMBER,
} from '../actions/selectActions';
import { SELECTED_COLUMN_ORDER, SELECTED_COMPARISON_ORDER, FILTER_ORDER } from '../actions/columnSelectOrder';

const INICIAL_STATE = {
  isFetching: true,
  planetas: [],
  erro: '',
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

const AgradoAoCC = (state) => {
  const { comparison, column, value, filterByNumericValues } = state;
  if (filterByNumericValues.length === 0) {
    return ({
      ...state, filterByNumericValues: [{ comparison, value, column }],
    });
  }
  return {
    ...state, filterByNumericValues: [...filterByNumericValues, { comparison, value, column }],
  };
};

const filterRemover = (filters, filtroARemover) => (
  filters.filter((filter) => (filter !== filtroARemover))
);

/*
função dynamicSort encontrada em um blog. Eis o link:
https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
*/

function dynamicSortDesc(coluna) {
  let sortOrder = 1;
  let property = coluna;

  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    if (sortOrder === -1) {
      return a[property].localeCompare(b[property]);
    }
    return b[property].localeCompare(a[property]);
  };
}

function dynamicSortAsc(coluna) {
  let sortOrder = 1;
  let property = coluna;

  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    if (sortOrder === -1) {
      return b[property].localeCompare(a[property]);
    }
    return a[property].localeCompare(b[property]);
  };
}

const dataRefiner = (obj, stateOrder) => {
  const order = { column: stateOrder.column.toLowerCase(), sort: stateOrder.sort };
  const unknown = obj.filter((planeta) => planeta[order.column] === 'unknown');
  const planetas = obj.filter((planeta) => planeta[order.column] !== 'unknown');
  return { unknown, order, planetas };
};

const totalDeSorter = (obj, stateOrder) => {
  const { order, planetas, unknown } = dataRefiner(obj, stateOrder);
  const { column, sort } = order;
  let sortPlanet = [];
  switch (sort) {
    case 'ASC':
      colunas.includes(column) ? planetas.sort((a, b) =>
      (parseInt(b[order.column], 10) - parseInt(a[order.column], 10))) :
      sortPlanet = planetas.sort(dynamicSortAsc(column));
    case 'DESC':
      colunas.includes(column) ? sortPlanet = planetas.sort((a, b) =>
      (parseInt(b[order.column], 10) - parseInt(a[order.column], 10))) :
      sortPlanet = planetas.sort(dynamicSortDesc(column));
    default:
  }
  return [...sortPlanet, ...unknown];
};

const dataReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case SUCESSO:
      return { ...state, planetas: totalDeSorter(action.data, state.order), isFetching: false };
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
    case SELECTED_COLUMN_ORDER:
      return { ...state, order: { sort: state.order.sort, column: action.value } };
    case SELECTED_COMPARISON_ORDER:
      return { ...state, order: { sort: action.value, column: state.order.column } };
    case FILTER_ORDER:
      return { ...state, planetas: totalDeSorter(state.planetas, state.order) };
    case REMOVE_FILTER:
      return {
        ...state, filterByNumericValues: filterRemover(state.filterByNumericValues, action.remove),
      };
    default:
      return state;
  }
};

export default dataReducer;
