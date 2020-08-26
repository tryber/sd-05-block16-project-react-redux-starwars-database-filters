import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resolverPlanets } from './actions';
import Table from './components/Table';
import './App.css';

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
