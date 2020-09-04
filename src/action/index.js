import resolveApi from '../service/swAPI';

const CARREGANDO_API = 'CARREGANDO_API';
const SUCESSO_API = 'SUCESSO_API';
const FILTRAR_NOMES = 'FILTRAR_NOMES';

const ACTIONS = {
  CARREGANDO_API,
  SUCESSO_API,
  FILTRAR_NOMES,
};

export default ACTIONS;

export const filtraNomesAction = (name) => ({
  type: FILTRAR_NOMES,
  name,
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
