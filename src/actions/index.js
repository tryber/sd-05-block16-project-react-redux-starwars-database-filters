import Api from '../services/Api';

// transparencia: Conteudo comparado ao gabarito de GOT https://course.betrybe.com/front-end/redux/react-with-redux-part-2/solutions

export const CALL_API = 'CALL_API';
export const RECEIVED_API = 'RECEIVED_API';

const callApi = () => {
  return { type: CALL_API };
};

function receivedApi(data) {
  return { type: RECEIVED_API, planets: data.results };
}

export const AcionaApi = () => {
  return (dispatch) => {
    dispatch(callApi());
    return Api().then((response) => dispatch(receivedApi(response)));
  };
};
