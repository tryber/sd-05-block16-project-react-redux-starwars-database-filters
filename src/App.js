import React from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import NumericFilters from './components/NumericFilters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <NumericFilters />
        <Table />
      </header>
    </div>
  );
}

export default App;
