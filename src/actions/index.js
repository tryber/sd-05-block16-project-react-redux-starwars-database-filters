import requestAPI from '../services/requestAPI';

export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_OK = 'REQUEST_OK';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const requestLoading = () => ({
  type: REQUEST_LOADING,
  loading: true,
});

export const requestSuccess = (data) => ({
  type: REQUEST_OK,
  loading: false,
  data: data.results,
});

export const requestFail = (error) => ({
  type: REQUEST_FAILED,
  loading: false,
  error,
});

export function thunkRequest() {
  return (dispatch) => {
    dispatch(requestLoading());
    return requestAPI()
      .then(
        (results) => dispatch(requestSuccess(results)),
        (error) => dispatch(requestFail(error)),
      );
  };
}
