import resolveAPI from '../services/api';

export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCESS = 'REQUEST_API_SUCESS';
export const REQUEST_API_FAILED = 'REQUEST_API_FAILED';

// Actions que avisa que estou fazendo uma requisição
export function requestAPI() {
  return {
    type: REQUEST_API,
    payload: true,
  };
}

// Actions que em caso de sucesso, pega os dados da request API e popula state do store
export function requestAPISucess(planets) {
  return {
    type: REQUEST_API_SUCESS,
    payload: planets,
  };
}

export function requestAPIFailed(erro) {
  return {
    type: REQUEST_API_FAILED,
    payload: erro,
  };
}

// Action Creator que vai controlar a chamada da API
export function fetchPlanetsAPI() {
  return (dispatch) => {
    dispatch(requestAPI());

    return resolveAPI()
      .then((results) => dispatch(requestAPISucess(results)))
      .catch((erro) => dispatch(requestAPIFailed(erro)));
  };
}
