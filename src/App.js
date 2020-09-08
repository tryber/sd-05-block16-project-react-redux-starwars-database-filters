// actions sao objetos
// reducers são interpretadores de actions - sempre switch
// store é o estado gravado, informação salva
// no redux nao consegue alterar diretamente o estado
import React from 'react';
import './App.css';
import Table from './components/Table';
// serve para ligar o componente App ao redux
import { connect } from 'react-redux';
import { func } from 'prop-types';

function App() {
  return(
    <Table />
  )
}

/* conectar com o state do store
const mapStateToProps = (state) => {
  return {
    valor: state.valor,
  }
}

// mandar a action
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: 'ADICIONA', value: 1 }),
  }
}
*/ 

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
