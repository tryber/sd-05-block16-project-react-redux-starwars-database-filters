export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';

/* consultado
https://blog.coderockr.com/posts/2016/requisicoes-assincronas-em-redux/
 Exclui a função de dentro para implementar em outro arquivo */

const requestApi = () => ({
  type: REQUEST_API,
  payload: true,
});

const receiveApi = () => ({
  type: RECEIVE_API,
  payload: planetas.results,
});
