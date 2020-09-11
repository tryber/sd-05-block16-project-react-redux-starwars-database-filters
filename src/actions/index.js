import getApi from '../services/getApi';
// Varíaveis para realizar as ações
export const CHAMAR_API = 'CHAMAR_API';
export const SUCESSO_API = 'SUCESSO_API';
export const FILTRO_NOME = 'FILTRO_NOME';
export const FILTRO_COLUNA = 'FILTRO_COLUNA';
export const FILTRO_COMPARACAO = 'FILTRO_COMPARACAO';
export const FILTRO_VALOR = 'FILTRO_VALOR';
export const FILTRO_NUMEROS = 'FILTRO_NUMEROS';
export const INICIA_FILTROS = 'INICIA_FILTROS';
export const REMOVE_FILTRO = 'REMOVE_FILTRO';
export const ORDENA_FILTRO = 'ORDENA_FILTRO';

export const iniciaFiltros = (filtro) => ({
  type: INICIA_FILTROS,
  filtro,
});

// Ação que chama os dados da API
const chamarApiAction = () => ({
  type: CHAMAR_API,
  isFetching: true,
});
// Ação em que os dados da API já foram chamados
const sucessoApiAction = (dados) => ({
  type: SUCESSO_API,
  isFetching: false,
  data: dados,
});
// Ação que pega apenas os nomes dos planetas da API
export const pegandoNomeAction = (name) => ({
  type: FILTRO_NOME,
  name,
});
// Ação para pegar os planetas por comparação, valor e coluna
export const pegandoNumerosAction = (filtro) => ({
  type: FILTRO_NUMEROS,
  filtro,
});

export const removeClick = (column) => ({
  type: REMOVE_FILTRO,
  column,
});

export const ordenaFiltro = (titulo) => ({
  type: ORDENA_FILTRO,
  titulo,
});
// Função em que a API é despachada para o reducer
export function fetchApi() {
  return (dispatch) => {
    dispatch(chamarApiAction());
    return getApi().then((dadosApi) => dispatch(sucessoApiAction(dadosApi)));
  };
}
