import planetsAPI from '../services/planetsAPI';

export const SEARCH_PLANET = 'SEARCH_PLANET';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

export const searchPlanet = () => ({
  type: SEARCH_PLANET,
  loading: true,
});

export const searchSuccess = (planet) => ({
  type: SEARCH_SUCCESS,
  loading: false,
  data: planet,
});

export function thunkPlanet() {
  return (dispatch) => {
    dispatch(searchPlanet());
    return planetsAPI().then(({ results }) => dispatch(searchSuccess(results)));
  };
}
