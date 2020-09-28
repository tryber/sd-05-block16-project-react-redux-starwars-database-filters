import api from '../services/api';

export const aquisicao = () => ({
  type: AQUISICAO,
});

export const certo = (resultado) => ({
  type: CERTO,
  resultado,
});

export const falha = (erro) => ({
  type: FALHA,
  erro,
});

  export function api() {
    return (dispatch) => {
      dispatch(aquisicao());
      return fetch('https://swapi-trybe.herokuapp.com/api/planets')
        .then((response) => response.json())
          .then((data) => dispatch(certo(data.resultado)),
          (erro) => dispatch(falha(erro)),
        );
    };
  }