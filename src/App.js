import React from 'react';

import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumber from './components/FilterByNumber';
import OrderPlanets from './components/OrderPlanets';

function App() {
  return (
    <div>
      <FilterByName />
      <FilterByNumber />
      <OrderPlanets />
      <Table />
    </div>
  );
}

export default App;
