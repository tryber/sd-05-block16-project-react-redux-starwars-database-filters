import requestPlanets from '../services/planetAPI';
// CODIGO BASEADO NO REP:
// https://github.com/tryber/sd-05-block16-project-react-redux-starwars-database-filters/tree/jorge-silva-project-react-redux-starwars-database
export const CASE_SUCESS = 'SUCESS';
export const CASE_FAILED = 'FAILED';
export const REQPLANETS = 'REQUEST_PLANETS';
export const NAME = 'NAME';
export const COLUMN = 'COLUMN';
export const COMPARISON = 'COMP';
export const REMOVE = 'REMOVE';
export const ORDEM = 'ORDER';

export const rqPlanets = () => ({
  type: REQPLANETS,
});

export const rpSucess = (data) => ({
  type: CASE_SUCESS,
  data,
});

export const rpFailed = (error) => ({
  type: CASE_FAILED,
  error,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(rqPlanets());
    return requestPlanets().then(
      (data) => dispatch(rpSucess(data.results)),
      (error) => dispatch(rpFailed(error.message)),
    );
  };
}

export const filterName = (name) => ({
  type: NAME,
  filters: {
    filterByName: {
      name,
    },
  },
});

export const filterValues = (column, comparison, value) => ({
  type: COLUMN,
  column,
  comparison,
  value,
});

export const removeFilters = (index) => ({
  type: REMOVE,
  index,
});

export const ordenar = (order, column) => ({
  type: ORDEM,
  column,
  order,
});
