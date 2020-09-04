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

export function fetchActionPlanets() {
  // action creator retorna uma função
  return (dispatch) => {
    // declaração do thunk. Thunk é o retorno de uma função.
    dispatch(requestPlanets());
    return VerificaFetch(PLANET_API).then((dados) =>
      dispatch(requestPlanetsSuccess(dados))
    );
  };
}

export const filterByName = (planet) => ({
  type: 'FILTER_NAME',
  payload: planet,
});

export const filterNumber = (column, comparison, value) => ({
  type: 'FILTER_NUMERIC',
  column,
  comparison,
  value,
});

export const handleColumn = (column) => ({
  type: 'FILTER_COLUMN',
  payload: column,
});

export const onChangeColumn = (column) => ({
  type: 'COLUMN_FILTER',
  payload: column,
});

export const onChangeComparison = (comparison) => ({
  type: 'COMPARISON_FILTER',
  payload: comparison,
});

export const onChangeValue = (value) => ({
  type: 'VALUE_FILTER',
  payload: value,
});

export const removeFilter = (remove) => ({
  type: 'REMOVE_FILTER',
  payload: remove,
});

export const retornaColumn = (retorna) => ({
  type: 'RETORNA_COLUMN',
  payload: retorna,
});

export default fetchActionPlanets;
