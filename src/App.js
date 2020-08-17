import React from 'react';
import './App.css';
import Table from './components/Table';
import Search from './components/Search';
import FilterNumeric from './components/FilterNumeric';

function App() {
  return (
    <div className="App">
      <Search />
      <FilterNumeric />
      <Table />
    </div>
  );
}

export default App;
