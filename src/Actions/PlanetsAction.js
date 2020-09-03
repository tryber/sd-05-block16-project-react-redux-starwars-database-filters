import getPlanets from '../Services/API';

export const FETCH_PLANETS = 'FETCH_PLANETS';
export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

export const fetchPlanets = (payload) => ({
  type: FETCH_PLANETS,
  payload,
});

export const planetRequestError = (payload) => ({
  type: REQUEST_ERROR,
  payload,
});

// Thunk é um dispatch de dispatch

export function getStarWarsPlanets() { // função que faz a requisição
  return (dispatch) => {
    dispatch(requestPlanets()); // action da requisição
    return getPlanets() // Função da Api
      .then(
        // caso seja OK a requisição, passa o s dados
        (planets) => dispatch(fetchPlanets(planets)),
        // caso dê erro, passa o erro
        (error) => dispatch(planetRequestError(error)),
      );
  };
}
