import React from 'react';

import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';

function App() {
  return (
    <div>
      <FilterByName />
      <FilterByNumber />
      <Table />
    </div>
  );
}

export default App;
