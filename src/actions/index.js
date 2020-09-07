import Api from '../services/Api';

// transparencia: Conteudo comparado ao gabarito de GOT https://course.betrybe.com/front-end/redux/react-with-redux-part-2/solutions

export const CALL_API = 'CALL_API';
export const RECEIVED_API = 'RECEIVED_API';
export const FILTER_PLANET = 'FILTER_PLANET';
export const FILTER_GENERAL = 'FILTER_GENERAL';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const callApi = () => ({ type: CALL_API });

const receivedApi = (data) => ({ type: RECEIVED_API, planets: data.results });

export const filterPlanet = (name) => ({ type: FILTER_PLANET, name });

export const filterGeneral = ({ column, comparison, value }) => ({
  type: FILTER_GENERAL,
  column,
  comparison,
  value,
});

export const removeFilter = (arr) => ({ type: REMOVE_FILTER, arr });

export const AcionaApi = () => (dispatch) => {
  dispatch(callApi());
  return Api().then((response) => dispatch(receivedApi(response)));
};
