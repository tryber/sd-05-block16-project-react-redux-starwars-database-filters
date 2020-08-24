import React from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <Table />
      </header>
    </div>
  );
}

export default App;
