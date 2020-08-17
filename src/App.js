import React, { Component } from 'react';

import './App.css';

import Table from './components/Table';
import Filters from './components/Filters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Filters />
        </header>
        <section>
          <Table />
        </section>
      </div>
    );
  }
}

export default App;
