import planetAPI from '../services/requestAPI.js';

// Definindo as actions e em seguida a action creator correspondente
export const REQUEST_OK = 'REQUEST_OK';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const REQUEST_LOADING = 'REQUEST_LOADING';

export const requestSuccess = () => ({
  type: REQUEST_OK,
  loading: false,
});

export const requestFail = (error) => ({
  type: REQUEST_FAILED,
  loading: false,
  error,
});

export const requestLoading = () => ({
  type: REQUEST_LOADING,
  loading: true,
});

export function thunkStarwars(planet) { // CONFERIR SE PARAMETRO ESTA CORRETO
  return (dispatch) => {
    dispatch(requestLoading(planet));
    return planetAPI(planet)
      .then(
        (results) => dispatch(requestSuccess(results)),
        (error) => dispatch(requestFail(error.message)),
      );
  };
}
