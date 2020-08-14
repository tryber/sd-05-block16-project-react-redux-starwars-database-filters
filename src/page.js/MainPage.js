import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchStarWarsPlanets } from '../actions/fetchPlanetsApi';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

class MainPage extends Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Table />
      </div>
    );
  }
}

MainPage.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchStarWarsPlanets()),
});

export default connect(null, mapDispatchToProps)(MainPage);
