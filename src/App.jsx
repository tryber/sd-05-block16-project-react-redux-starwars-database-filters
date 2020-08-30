import React from 'react';
import './App.css';
import Table from './components/tabela';
import Pesquisar from './components/busca';

function App() {
  return (
    <div className="App">
      <div className="filtros">
        <Pesquisar />
      </div>
      <div className="tabela">
        <Table />
      </div>
    </div>
  );
}

export default App;
