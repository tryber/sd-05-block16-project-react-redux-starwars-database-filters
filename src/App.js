import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Filter from './components/Filter';
// import { useSelector } from 'react-redux';

function App() {
  return (
    <div>
      <Filter />
      <Table />
    </div>
  );
}

export default App;
