import { StarWarsPlanetsAPI } from '../store/StarWarsPlanetsAPI';

export const REQUISICAO_BEM_SUCEDIDA = 'REQUISICAO_BEM_SUCEDIDA';
export const REQUISICAO_MAL_SUCEDIDA = 'REQUISICAO_MAL_SUCEDIDA';
export const LOADING = 'LOADING';

export const requicaoBemSucedida = (payload) => ({
  type: REQUISICAO_BEM_SUCEDIDA,
  loadind: false,
  payload,
});

export const requicaoMalSucedida = (error) => ({
  type: REQUISICAO_MAL_SUCEDIDA,
  loadind: false,
  payload: error,
});

export const loading = () => ({
  type: LOADING,
  loadind: true,
});

function ReduxThunk(name) {
  return (dispatch) => {
    dispatch(loading(name))
    return StarWarsPlanetsAPI()
      .then(
        (payload) => dispatch(requicaoBemSucedida(payload)),
        (error) => dispatch(requicaoMalSucedida(error)),
      );
  };
};

export default ReduxThunk;
