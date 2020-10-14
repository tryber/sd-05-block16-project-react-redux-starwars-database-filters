import endpoint from '../service/api';

export const AQUISICAO = 'AQUISICAO';
export const CERTO = 'CERTO';
export const TEXTO = 'TEXTO';
export const NUMERO = 'NUMERO';
export const ORGANIZAR = 'ORGANIZAR';

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

export const filterByName = (inputText) => ({
  type: TEXTO,
  inputText,
});

export const filterByNumber = (column, comparison, value) => ({
  type: NUMERO,
  column,
  comparison,
  value,
});

export const ordenarFilter = ({ column }) => ({
    type: ORGANIZAR,
    column,
});
