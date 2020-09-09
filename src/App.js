import React from 'react';
/* import "./App.css"; */
import Table from './components/Table';
import Procurar from './components/Procurar';
import Seletores from './components/Seletores';
import SelecionarFaixaValor from './components/SelecionarFaixaValor';
import FiltrarNumeros from './components/FiltrarNumeros';
import BotaoFiltrar from './components/BotaoFiltrar';
import IconeX from './components/IconeX';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Procurar />
        <Seletores />
        <SelecionarFaixaValor />
        <FiltrarNumeros />
        <BotaoFiltrar />
        <IconeX />
      </header>
      <Table />
    </div>
  );
}

export default App;
