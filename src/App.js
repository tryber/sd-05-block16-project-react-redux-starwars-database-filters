import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import MainPage from './page.js/MainPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
