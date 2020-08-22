import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React/Redux Project - Star Wars</h2>
        <SearchBar />
        <Table />
      </header>
    </div>
  );
}

export default App;
