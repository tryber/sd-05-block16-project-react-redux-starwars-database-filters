import requisicaoAPI from '../api/data';

export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
const ACTIONS = {
  REQUEST_API, RECEIVE_API,
};

export default ACTIONS;

/* consultado
https://blog.coderockr.com/posts/2016/requisicoes-assincronas-em-redux/
 Exclui a função de dentro para implementar em outro arquivo */

export const requestApi = () => ({
  type: REQUEST_API,
});

export const receiveApi = (planetas) => ({
  type: RECEIVE_API,
  payload: planetas,
});

export function fetchAllPlanets() {
  return (dispatch) => {
    dispatch(requestApi());
    return requisicaoAPI()
      .then((dados) => dispatch(receiveApi(dados)));
  };
}
