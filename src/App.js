import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import Table from './components/Table';
import { resolverPlanets } from './actions';

class App extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { planetasDoReducer } = this.props;
    console.log('ae', planetasDoReducer);
    return (
      <div>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetasDoReducer: state.reducerPlanets.planets,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(resolverPlanets()),
});

App.propTypes = {
  planetasDoReducer: PropTypes.number.isRequired,
  getPlanets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
