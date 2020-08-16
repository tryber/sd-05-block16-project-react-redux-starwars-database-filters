import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

import fetchPlanets from './actions/fetchPlanets';
import Table from './components/Table';
import Filters from './components/Filters';

class App extends Component {
  componentDidMount() {
    this.props.planetsData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Filters />
          <Table />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = {
  planetsData: fetchPlanets,
};

App.propTypes = {
  planetsData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
