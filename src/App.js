import React from 'react';
import './App.css';
import Table from './components/Table';
import TextFilter from './components/TextFilter';
import NumberFilter from './components/NumberFilter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TextFilter />
          <NumberFilter />
          <Table />
        </div>
      </header>
    </div>
  );
}

export default App;
