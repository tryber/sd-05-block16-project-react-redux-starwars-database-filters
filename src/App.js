import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Table from './components/Table';
import store from './store/index';
import SearchBar from './components/inputs'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
