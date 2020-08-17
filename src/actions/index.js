import resolveAPIPlanets from '../services/api';

export const RECEIVE_PLANETS = 'RECEIVE_PLANETS';
export const RECEIVE_PLANETS_SUCCESS = 'RECEIVE_PLANETS_SUCCESS';
export const RECEIVE_PLANETS_FAILED = 'RECEIVE_PLANETS_FAILED';

// ACTION QUE ABRE A REQUISIÇÃO PARA API
export const actionReceivePlanets = () => ({
  type: RECEIVE_PLANETS,
});

// ACTION QUE, CASO SUCESSO, IRA POPULAR O PAYLOAD CONTENDO RETORNO DA API
// RESOLVEAPIPLANETS ../SERVICES/API
export const actionReceivePlanetsSuccess = (payload) => ({
  type: RECEIVE_PLANETS_SUCCESS,
  payload,
});

export const actionReceivePlanetsFailed = (erro) => ({
  type: RECEIVE_PLANETS_FAILED,
  erro,
});

// ONDE A API É CHAMADA E FEITO O DISPATCH E RETORNOS NECESSARIOS
export const resolverPlanets = () => (dispatch) => {
  // meramente indicativo, para mostrar loading enquanto tenta executar a api
  dispatch(actionReceivePlanets());
  return resolveAPIPlanets()
    .then((planetas) => dispatch(actionReceivePlanetsSuccess(planetas)))
    .catch((erro) => dispatch(actionReceivePlanetsFailed(erro)));
};
