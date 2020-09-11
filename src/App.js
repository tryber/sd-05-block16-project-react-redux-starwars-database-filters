import React from 'react';
import './App.css';
import Table from './components/Table';
import Head from './components/Head';
import Filter from './components/Filter';
import FiltroNumerico from './components/FiltroNumerico';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Filter />
        <br />
        <br />
        <Table />
        <Head />
        <FiltroNumerico />
      </header>
    </div>
  );
}

export default App;
