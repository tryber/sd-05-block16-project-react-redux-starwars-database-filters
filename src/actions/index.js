export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const searchBegin = () => (
  {
    type: SEARCH_BEGIN,
    loading: true,
  }
);

export const searchSuccess = (results) => (
  {
    type: SEARCH_SUCCESS,
    loading: false,
    results,
  }
);

export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  loading: false,
  error,
});

export function fetchAPI() {
  return (dispatch) => {
    dispatch(searchBegin());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json()
        .then(
          (data) => dispatch(searchSuccess(data.results)),
          (error) => dispatch(searchFailure(error)),
        ));
  };
}
