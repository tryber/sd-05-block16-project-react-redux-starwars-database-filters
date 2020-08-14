import React from 'react';
// import './App.css';
import Title from './components/Title';
import FilterName from './components/FilterName';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <FilterName />
        <Table />
      </header>
    </div>
  );
}

export default App;
