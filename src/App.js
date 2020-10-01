// actions sao objetos
// reducers são interpretadores de actions - sempre switch
// store é o estado gravado, informação salva
// no redux nao consegue alterar diretamente o estado
import React from 'react';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
import Order from './components/Order';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Table />
      <FilterName />
      <FilterNumber />
      <Order/>
    </div>
  );
}

export default App;
