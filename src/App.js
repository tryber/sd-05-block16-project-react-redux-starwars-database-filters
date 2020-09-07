import React from 'react';
import Table from './components/table';
import SearchBar from './components/searchBar';
import NumericFilters from './components/numericFilters';

function App() {
  return (
    <div>
      <SearchBar />
      <NumericFilters />
      <Table />
    </div>
  );
}

export default App;
