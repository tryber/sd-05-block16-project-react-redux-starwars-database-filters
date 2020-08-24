const INITIAL_STATE = {
  isLoading: true,
  data: [],
  cabecalho: [],
};

function reducerBasico(state = INITIAL_STATE, action) {
  let valor;
  switch (action.type) {
    case 'PEGAR_OS_DADOS':
      return {
        ...state,
        isLoading: true,
      };
    case 'GUARDAR_DADOS':
      valor = Object.keys(action.payload[0]);
      return {
        ...state,
        cabecalho: valor.filter((titulo) => (titulo !== 'residents')),
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default reducerBasico;
