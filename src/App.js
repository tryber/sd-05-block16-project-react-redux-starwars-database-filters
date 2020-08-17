import React from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';
import FilterNumeric from './components/FilterNumeric';
import FilterStatus from './components/FilterStatus';

function App() {
  return (
    <div className="App">
      <Search />
      <FilterNumeric />
      <FilterStatus />
      <Table />
    </div>
  );
}

export default App;
