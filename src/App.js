import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Table from './pages/Table';

function App() {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
}

export default App;
