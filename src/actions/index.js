import VerificaFetch from '../section/data';

// pegar os dados que estão retornando da api e colocá-los dentro do redux.
// sempre uma action retorna um objeto,
// porém para trabalhar com assincrona precisa retorna uma função.

// todas as actions tem que retornar um objeto

export const PEGAR_OS_DADOS = 'PEGAR_OS_DADOS';
export const GUARDAR_DADOS = 'GUARDAR_DADOS';

export const requiring = () => ({
  type: 'PEGAR_OS_DADOS',
});

export const requiredAcceptide = (dadosAPI) => ({
  type: 'GUARDAR_DADOS',
  payload: dadosAPI,
});
// baseado no conteúdo do course react-redux parte 2
// declaração thunk return (dispatch)
export function dataSet() { // action creator retorna uma função
  return (dispatch) => { // declaração do thunk. Thunk é o retorno de uma função.
    dispatch(requiring());
    return VerificaFetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((dados) => dispatch(requiredAcceptide(dados)));
  };
}
