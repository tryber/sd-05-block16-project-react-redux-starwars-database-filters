import planetsAPI from '../services/planetsAPI';

export const SEARCH_PLANET = 'SEARCH_PLANET';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FILTER = 'SEARCH_FILTER';
export const PART_FILTER = 'PART_FILTER';
export const PART_VALUE = 'PART_VALUE';
export const PART_COMPARISON = 'PART_COMPARISON';
export const PART_COLUMN = 'PART_COLUMN';

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

export const particularFilter = (column, comparison, value) => ({
  type: PART_FILTER,
  column,
  comparison,
  value,
});

export const partColumn = (column) => ({
  type: PART_COLUMN,
  column,
});

export const partComparison = (comparison) => ({
  type: PART_COMPARISON,
  comparison,
});

export const partValue = (value) => ({
  type: PART_VALUE,
  value,
});

export function thunkPlanet() {
  return (dispatch) => {
    dispatch(searchPlanet());
    return planetsAPI().then(({ results }) => dispatch(searchSuccess(results)));
  };
}
// should filter with less than (4514ms)
// should filter with greather than (4510ms)
// should filter with equal to (4512ms)
