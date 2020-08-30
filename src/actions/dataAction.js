import fetcher from '../services/fetcher';

export const SUCESSO = 'SUCESSO';
export const CARREGANDO = 'CARREGANDO';
export const FALHA = 'FALHA';
export const NEW_FILTER = 'NEW_FILTER';

function carregando() {
  return { type: CARREGANDO };
}

function sucesso(data) {
  return { type: SUCESSO, data };
}

function falha(erro) {
  return { type: FALHA, erro };
}

function newFilter({ target: { value } }) {
  return { type: NEW_FILTER, value };
}

export function fetcherThunk() {
  return (dispatch) => {
    dispatch(carregando());
    return fetcher().then(
      (r) => dispatch(sucesso(r.results),
      (erro) => dispatch(falha(erro)),
      ));
  };
}

export default newFilter;
