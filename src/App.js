import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPlanets } from './actions';
import Table from './components/Table';

class App extends React.Component {
  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  render() {
    return (
      <Table />
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchPlanets()),
});

App.propTypes = { fetchAPI: PropTypes.func.isRequired };

export default connect(null, mapDispatchToProps)(App);
