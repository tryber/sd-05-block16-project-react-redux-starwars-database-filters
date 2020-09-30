import endpoint from '../service/api';

export const AQUISICAO = 'AQUISICAO';
export const CERTO = 'CERTO';

export const aquisicao = () => ({
  type: AQUISICAO,
  aquisicao: true,
});

export const certo = ({ results }) => ({
  type: CERTO,
  planets: results,
});

export default function funcaoApi() {
  return (dispatch) => {
    dispatch(aquisicao());
    return endpoint().then((response) => dispatch(certo(response)));
  };
}
