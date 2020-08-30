import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {

  render() {
    return (
    <div>
      <header >
        <SearchBar />
      </header>
      <body>
        <Table />
      </body>
    </div>
    )
  }
}

export default App;
