import fetcher from '../services/fetcher';

export const SUCESSO = 'SUCESSO';
export const CARREGANDO = 'CARREGANDO';
export const FALHA = 'FALHA';

function carregando() {
  return { type: CARREGANDO };
}

function sucesso(data) {
  return { type: SUCESSO, data };
}

function falha(erro) {
  return { type: FALHA, erro }
}

export function fetcherThunk() {
  return (dispatch) => {
    dispatch(carregando());
    return fetcher().then(
      (r) => dispatch(sucesso(r.results),
      (erro) => dispatch(falha(erro)),
      ))
  };
}
