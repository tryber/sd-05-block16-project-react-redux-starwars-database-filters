import getPlanets from '../services/starAPI';

export const REQUEST_STARWARS = 'REQUEST_STARWARS';
export const RECEIVE_STARWARS_SUCCESS = 'RECEIVE_STARWARS_SUCCESS';
export const RECEIVE_STARWARS_FAILURE = 'RECEIVE_STARWARS_FAILURE';

const requestStarWars = () => ({
  type: REQUEST_STARWARS,
});

const receiveStarWarsSuccess = (worlds) => ({
  type: RECEIVE_STARWARS_SUCCESS,
  worlds,
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
        (worlds) => dispatch(receiveStarWarsSuccess(worlds)),
        (error) => dispatch(receiveStarWarsFailure(error.message)),
      );
  };
}
