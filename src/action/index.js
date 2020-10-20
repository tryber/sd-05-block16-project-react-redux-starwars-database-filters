import resolveApi from '../service/swAPI';

const CARREGANDO_API = 'CARREGANDO_API';
const SUCESSO_API = 'SUCESSO_API';
const FILTRAR_NOMES = 'FILTRAR_NOMES';
const FILTRAR_VALORES = 'FILTRAR_VALORES';
const DELETA_FILTROS = 'DELETA_FILTROS';
const ORDENA_COLUNA = 'ORDENA_COLUNA'

const ACTIONS = {
  CARREGANDO_API,
  SUCESSO_API,
  FILTRAR_NOMES,
  FILTRAR_VALORES,
  DELETA_FILTROS,
  ORDENA_COLUNA,
};

export default ACTIONS;

export const ordenaColunaAction = (ordem) => ({
  type: ORDENA_COLUNA,
  ordem,
})

export const deletFilterAction = (column) => ({
  type: DELETA_FILTROS,
  column,
});

export const filtraNomesAction = (name) => ({
  type: FILTRAR_NOMES,
  name,
});

export const filtraValoresAction = (column, comparison, value) => ({
  type: FILTRAR_VALORES,
  column,
  comparison,
  value,
});

const carregandoApiAction = () => ({
  type: CARREGANDO_API,
  isFetching: true,
});

const sucessoApiAction = (resposta) => ({
  type: SUCESSO_API,
  isFetching: false,
  data: resposta,
});

export function fetchApi() {
  return (dispatch) => {
    dispatch(carregandoApiAction());
    return resolveApi().then((dadoApi) => dispatch(sucessoApiAction(dadoApi)));
  };
}
