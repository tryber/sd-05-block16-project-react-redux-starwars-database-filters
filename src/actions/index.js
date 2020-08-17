import planetsAPI from '../services/planetsAPI';

export const SEARCH_PLANET = 'SEARCH_PLANET';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FILTER = 'SEARCH_FILTER';

export const searchPlanet = () => ({
  type: SEARCH_PLANET,
  loading: true,
});

export const searchSuccess = (planet) => ({
  type: SEARCH_SUCCESS,
  loading: false,
  data: planet,
});

// utilizar payload sempre para não confundir. Dica do Lizzard.

export function searchFilter(event) {
  return {
    type: SEARCH_FILTER,
    payload: event.target.value,
  };
}

export function thunkPlanet() {
  return (dispatch) => {
    dispatch(searchPlanet());
    return planetsAPI().then(({ results }) => dispatch(searchSuccess(results)));
  };
}
