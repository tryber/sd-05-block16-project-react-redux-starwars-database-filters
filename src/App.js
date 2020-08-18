import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Select from './components/Select';
import Radio from './components/Radio';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Star Wars API</h1>
        <Form />
        <Radio />
        <Select />
        <Table />
      </div>
    );
  }
}

export default connect()(App);
