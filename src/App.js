import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/Searchbar';

function App() {
  return (
    <div>
      <h1>The StarWars Planets Table:</h1>
      <SearchBar />
      <Table />
      <h3>Made with Love</h3>
    </div>
  );
}

export default App;
