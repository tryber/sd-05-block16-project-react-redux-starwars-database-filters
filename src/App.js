import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './App.css';
import { fetchAPI } from './actions';
import Table from './components/Table';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAPI();
  }

  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPI()),
});

App.propTypes = {
  fetchAPI: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
