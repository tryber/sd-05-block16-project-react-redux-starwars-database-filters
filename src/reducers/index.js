const initialState = {
  valor: 0,
}

function emptyReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADICIONA':
      return { valor: state.valor + action.value }
    case 'SUBTRAI':
      return { valor: state.valor - action.value }
    default:
      return state;
  }
}

export default emptyReducer;

/* { type: 'ADICIONA',  value: 1 }
{ type: 'SUBTRAI',  value: 1} */