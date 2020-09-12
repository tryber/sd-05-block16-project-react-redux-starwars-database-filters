import React from 'react';
import Table from './components/table';
import SearchBar from './components/searchBar';
import NumericFilters from './components/numericFilters';
import Bonus from './components/bonus';

function App() {
  return (
    <div>
      <SearchBar />
      <Bonus />
      <NumericFilters />
      <Table />
    </div>
  );
}

export default App;
