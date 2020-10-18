// actions sao objetos
// reducers são interpretadores de actions - sempre switch
// store é o estado gravado, informação salva
// no redux nao consegue alterar diretamente o estado
// Referencias: projetos T5: Sinei, Giuliano, Renata
// Referencias: repositorio T4, T3
// plantão direcionado Hamaji
import React from 'react';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
