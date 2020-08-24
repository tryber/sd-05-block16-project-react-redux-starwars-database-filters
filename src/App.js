import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/inputs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <Table />
    </div>

  );
}

export default App;
