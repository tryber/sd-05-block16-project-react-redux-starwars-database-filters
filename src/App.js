import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
