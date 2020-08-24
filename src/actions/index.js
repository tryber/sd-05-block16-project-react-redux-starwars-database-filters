import requestPlanets from '../services/planetAPI';

export const RP_SUCESS = 'SUCESS';
export const RP_FAILED = 'FAILED';
export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const NAME = 'NAME';

export const rqPlanets = () => ({
  type: REQUEST_PLANETS,
});

export const rpSucess = (data) => ({
  type: RP_SUCESS,
  data,
});

export const rpFailed = (error) => ({
  type: RP_FAILED,
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
  filters: [
    {
      name,
    },
  ],
});
