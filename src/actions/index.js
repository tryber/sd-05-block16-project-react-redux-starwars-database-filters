import VerificaFetch from '../services/planets';

const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const PLANETS_REQUEST_SUCCESS = 'PLANETS_REQUEST_SUCCESS';
export const PLANETS_REQUEST = 'PLANETS_REQUEST';

const requestPlanets = () => ({
  type: PLANETS_REQUEST,
});

const requestPlanetsSuccess = (planets) => ({
  type: PLANETS_REQUEST_SUCCESS,
  payload: planets,
});

export function fetchActionPlanets() { // action creator retorna uma função
  return (dispatch) => { // declaração do thunk. Thunk é o retorno de uma função.
    dispatch(requestPlanets());
    return VerificaFetch(PLANET_API)
      .then((dados) => dispatch(requestPlanetsSuccess(dados)));
  };
}

export default fetchActionPlanets;
