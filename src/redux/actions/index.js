export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';

export const fetchApi = (apiDados) => (dispatch) => {
  dispatch(requestApi());
  return getApi(apiDados).then((dispatch) =>
    dispatch(receiveApi(apiDados.RECEIVE_API)),
  );
};