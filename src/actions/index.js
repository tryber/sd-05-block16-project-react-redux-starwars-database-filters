import VerificaFetch from '../section/data';

// pegar os dados que estão retornando da api e colocá-los dentro do redux.
// sempre uma action retorna um objeto,
// porém para trabalhar com assincrona precisa retorna uma função.

// todas as actions tem que retornar um objeto

export const requiring = () => ({
  type: 'PEGAR_OS_DADOS',
});

export const requiredAcceptide = (dadosAPI) => ({
  type: 'GUARDAR_DADOS',
  payload: dadosAPI,
});

export function dataSet() {
  return (dispatch) => {
    dispatch(requiring());
    return VerificaFetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((dados) => dispatch(requiredAcceptide(dados)));
  };
}
