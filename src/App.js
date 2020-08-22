import React from 'react';
import './App.css';
import Table from './components/Table';
import TextFilter from './components/TextFilter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextFilter />
        <Table />
      </header>
    </div>
  );
}

export default App;
