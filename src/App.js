import React from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import NumericFilters from './components/NumericFilters';
import FiltersList from './components/FiltersList';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <NumericFilters />
        <FiltersList />
        <Order />
        <Table />
      </header>
    </div>
  );
}

export default App;
