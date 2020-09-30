import endpoint from '../service/api';

export const AQUISICAO = 'AQUISICAO';

const aquisicao = () => ({ type: AQUISICAO });

export const CERTO = 'CERTO';

function certo(data) {
  return { type: CERTO, planets: data.resultado };
};

export const funcaoApi = () => {
  return (dispatch) => {
    dispatch(aquisicao());
    return endpoint().then((response) => dispatch(certo(response)));
  };
}
