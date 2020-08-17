import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Table from './components/Table';
import { resolverPlanets } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.getPlanets();
  }

  render() {
    const { planetasDoReducer } = this.props;
    console.log(planetasDoReducer);
    return (
      <div>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetasDoReducer: state.planetsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(resolverPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
