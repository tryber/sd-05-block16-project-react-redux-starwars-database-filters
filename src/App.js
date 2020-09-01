import React from 'react';
import Table from './components/Table';
import InputName from './components/InputName';
import InputNumber from './components/InputNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputName />
        <InputNumber />
        <Table />
      </header>
    </div>
  );
}

export default App;
