import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPlanets } from './actions';

import Table from './components/Table';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ActiveFilters from './components/ActiveFilters';
import SortFilter from './components/SortFilter';

class App extends React.Component {
  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <SortFilter />
        <Filters />
        <ActiveFilters />
        <Table />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchPlanets()),
});

App.propTypes = { fetchAPI: PropTypes.func.isRequired };

export default connect(null, mapDispatchToProps)(App);
