import getApi from '../services/getApi';

export const CHAMAR_API = 'CHAMAR_API';
export const SUCESSO_API = 'SUCESSO_API';
export const FILTRO_NOME = 'FILTRO_NOME';

const chamarApiAction = () => ({
  type: CHAMAR_API,
  isFetching: true,
});

const sucessoApiAction = (dados) => ({
  type: SUCESSO_API,
  isFetching: false,
  data: dados,
});

export const pegandoNomeAction = (name) => ({
  type: FILTRO_NOME,
  name,
});

export function fetchApi() {
  return (dispatch) => {
    dispatch(chamarApiAction());
    return getApi().then((dadosApi) => dispatch(sucessoApiAction(dadosApi)));
  };
}
