import React from 'react';
import './App.css';

import Table from './components/Table';
import {Provider} from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
          <Table />
      
      </div>
    </Provider>
  );
}

export default App;
