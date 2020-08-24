import React from 'react';
/* import "./App.css"; */
import { Provider } from 'react-redux';
import store from './store';
import Table from './components/Table';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
      </div>
    </Provider>
  );
}

export default App;
