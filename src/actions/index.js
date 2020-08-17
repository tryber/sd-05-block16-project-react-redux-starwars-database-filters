import getPlanets from '../services/starAPI';

export const REQUEST_STARWARS = 'REQUEST_STARWARS';
export const RECEIVE_STARWARS_SUCCESS = 'RECEIVE_STARWARS_SUCCESS';
export const RECEIVE_STARWARS_FAILURE = 'RECEIVE_STARWARS_FAILURE';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';

const requestStarWars = () => ({
  type: REQUEST_STARWARS,
});

const receiveStarWarsSuccess = (data) => ({
  type: RECEIVE_STARWARS_SUCCESS,
  data,
});

const receiveStarWarsFailure = (error) => ({
  type: RECEIVE_STARWARS_FAILURE,
  error,
});

export function fetchStarWars() {
  return (dispatch) => {
    dispatch(requestStarWars());

    return getPlanets()
      .then(
        (data) => dispatch(receiveStarWarsSuccess(data)),
        (error) => dispatch(receiveStarWarsFailure(error.message)),
      );
  };
}

export const filterByName = (name) => ({
  type: FILTER_BY_NAME,
  name,
});

