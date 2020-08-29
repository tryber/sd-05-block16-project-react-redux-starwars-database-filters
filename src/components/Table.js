import React from 'react';

const Table = () => <div>StarWars Datatable with Filters</div>;

export default Table;
import React from 'react';
import './App.css';

import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table />
      </header>
    </div>
  );
}

export default App;
