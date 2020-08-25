import getPlanets from '../../services';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const RECEIVED_PLANETS = 'RECEIVED_PLANETS';

export const requestPlanets = () => ({ type: REQUEST_PLANETS });

export const receivedPlanets = (data) => ({
  type: RECEIVED_PLANETS,
  data,
});

export const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  status: error,
});

export function fetchSWAPI() {
  return (dispatch) => {
    dispatch(requestPlanets());
    return getPlanets().then(
      (data) => dispatch(receivedPlanets(data.results)),
      (error) => dispatch(failedRequest(error)),
    );
  };
}
