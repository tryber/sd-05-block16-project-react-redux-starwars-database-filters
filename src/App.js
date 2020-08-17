import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import fetchData from './actions';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <NameFilter />
        <NumericFilter />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
};
