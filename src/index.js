import React from 'react';
import ReactDOM from 'react-dom';
import Store from './redux/store/index';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
  
serviceWorker.unregister();
