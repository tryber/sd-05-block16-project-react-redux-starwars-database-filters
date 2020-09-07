import React from 'react';
import './App.css';
import Table from './components/Table';
import Head from './components/Head';
import Filter from './components/Filter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Filter />
        <br />
        <br />
        <Table />
        <Head />
      </header>
    </div>
  );
}

export default App;
