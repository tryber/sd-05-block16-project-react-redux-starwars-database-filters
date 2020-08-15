import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import fetchPlanets from './actions/fetchPlanets';
import Table from './components/Table';

class App extends Component {
  componentDidMount() {
    this.props.planetsData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = {
  planetsData: fetchPlanets,
}

export default connect(null, mapDispatchToProps)(App);
