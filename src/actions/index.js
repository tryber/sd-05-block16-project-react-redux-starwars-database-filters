import planetsAPI from '../services/planetsAPI';

export const SEARCH_PLANET = 'SEARCH_PLANET';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const PLANET_NAME = 'PLANET_NAME';

export const searchPlanet = (planetSearched) => ({
  type: SEARCH_PLANET,
  loading: true,
  planetSearched,
});

export const searchSuccess = (planet) => ({
  type: SEARCH_SUCCESS,
  loading: false,
  planet,
});

export const filterByName = (name) => ({
  type: PLANET_NAME,
  name,
});

export function thunkPlanet(name) {
  return (dispatch) => {
    dispatch(searchPlanet(name));
    return planetsAPI(name).then((planet) => dispatch(searchSuccess(planet)));
  };
}
