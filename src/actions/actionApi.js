// import fetch from "node-fetch";
import getApiPlanet from '../apiPlanet';

export const REQUEST_PLANETS_API = 'REQUEST_PLANETS_API';
export const RECEIVE_PLANETS_API = 'RECEIVE_PLANETS_API';

const requestPlanetsApi = () => ({ // action retorna um obj
  type: REQUEST_PLANETS_API,
  isBatatinha: true,
});

const receivePlanetsApi = (planets) => ({
  // console.log(planets)
  type: RECEIVE_PLANETS_API,
  results: planets.results,
  // action retorna um obj
});

export function fetchPlanets() { // action creator retorna uma função
  return (dispatch) => { // thunk declarado (Thunk é o retorno de uma função)
    dispatch(requestPlanetsApi());
    return getApiPlanet()
      // .then((response) => response.json())
      .then((planets) => dispatch(receivePlanetsApi(planets)));
  };
}

// payload = dados que a action quer enviar para a store
