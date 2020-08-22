import planetAPI from '../services/requestAPI.js';

// Definindo as actions e em seguida a action creator correspondente
export const REQUEST_OK = 'REQUEST_OK';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const TEXT_INPUT = 'TEXT-INPUT';
export const NUMBER_FILTER = 'NUMBER_FILTER';

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

export const requestLoading = () => ({
  type: REQUEST_LOADING,
  loading: true,
});

export function thunkStarWars() {
  return (dispatch) => {
    dispatch(requestLoading());
    return planetAPI()
      .then(
        (results) => dispatch(requestSuccess(results)),
        (error) => dispatch(requestFail(error)),
      );
  };
}

// Action Creator para filtrar input de texto
export function textFilter(textInput) {
  return {
    type: TEXT_INPUT,
    textInput,
  };
}

// Action Creator para filtrar input de número, parâmetro
// configurado como um objeto contendo os três parâmetros
export function numberFilter({column,comparison,value}) {
  return {
    type: NUMBER_FILTER,
    column,
    comparison,
    value,
  };
}
