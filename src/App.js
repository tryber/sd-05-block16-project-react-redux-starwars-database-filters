import React from 'react';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table />
        <Filter />
      </header>
    </div>
  );
}

export default App;
