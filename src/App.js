import React from 'react';
import './App.css';

import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Filtros from './components/Filtros';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <Filtros />
        <Table />
      </header>
    </div>
  );
}

export default App;
