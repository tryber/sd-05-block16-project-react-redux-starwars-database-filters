import resolveApi from '../service/swAPI';

const CARREGANDO_API = 'CARREGANDO_API';
const SUCESSO_API = 'SUCESSO_API';
const FALHA_API = 'FALHA_API';

const ACTIONS = {
  CARREGANDO_API,
  SUCESSO_API,
  FALHA_API,
};

export default ACTIONS;

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
