import { FILTER_BY_NAME, FILTER_BY_NUMERIC_VALUES } from './actions';

// const initialState = {
//   filters: {
//     filterByName: { name: '' },
//   },
//   filterByNumericValues: [],
// };

// Neste codigo acima: as intrucoes do projeto nos induz ao erro grandemente pois
// pede obrigatoriamente colocquemos a chave filterByName: { name: ''}
// dentro de uma outra chave 'filters: ' o que me tomou 2 dias de sono noite
//  de sono tentando encontrar o erro que o teste acusa e gracas ao
// PR do Felipe consegui debugar meu componente e encontrar o erro.

const initialState = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function filterReducer(state = initialState, action) {
  // console.log( `received action`, action);
  switch (action.type) {
    case FILTER_BY_NAME:
      return {
        ...state,
        filterByName: {
          name: action.payload.name,
          // name: action.payload,
        },
      };
    case FILTER_BY_NUMERIC_VALUES:
      return {
        ...state,
        filterByNumericValues: [
          ...state.filterByNumericValues,
          { ...action.payload },
        ],
      };
    default:
      return state;
  }
}

export default filterReducer;

// esquema de reducer montado tendo como base os exercicios e conteudo do course
