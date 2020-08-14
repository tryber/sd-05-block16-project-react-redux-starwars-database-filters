import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Table from './components/Table';
import Form from './components/Form';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Form />
        <Table />
      </div>
    );
  }
}



export default connect()(App);
