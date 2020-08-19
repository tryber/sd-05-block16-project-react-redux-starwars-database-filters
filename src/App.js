import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import PartFilters from './components/particularFilters';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PartFilters />
      <Table />
    </div>
  );
}

export default App;
