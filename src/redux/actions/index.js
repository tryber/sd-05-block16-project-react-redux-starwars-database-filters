import RequisitionApi from '../../api/data';

export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';

/* consultado
https://blog.coderockr.com/posts/2016/requisicoes-assincronas-em-redux/
 Exclui a função de dentro para implementar em outro arquivo */

export const requestApi = () => ({
  type: REQUEST_API,
  payload: true,
});

export const receiveApi = (planetas) => ({
  type: RECEIVE_API,
  payload: planetas.results,
});

export function fetchAllPlanets() {
  return (dispatch) => {
    dispatch(requestApi());
    return RequisitionApi()
      .then((getAPi) => dispatch(receiveApi(getAPi)));
  };
}
