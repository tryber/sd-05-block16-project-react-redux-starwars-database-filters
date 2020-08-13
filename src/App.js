import React from 'react';
import './App.css';
import Table from './components/Table';

/* Api */
import { getPlanets } from './services/Api';

function App() {
  // getPlanets().then(response => {
  //   console.log(response);
  // });
    
  return (
    <div className="App">
      <Table />
    </div>
  );
}



export default App;
