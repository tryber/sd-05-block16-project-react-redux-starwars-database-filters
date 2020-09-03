import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Components/Header';
import PlanetsTable from '../Components/PlanetsTable';
import { getStarWarsPlanets } from '../Actions';

class MainPage extends Component {
  componentDidMount() {
    const { gettingPlanets } = this.props;
    gettingPlanets();
  }

  render() {
    return (
      <div>
        <h1>Star Wars Project</h1>
        <Header />
        <PlanetsTable />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  gettingPlanets: () => dispatch(getStarWarsPlanets()),
});

export default connect(null, mapDispatchToProps)(MainPage);

MainPage.propTypes = {
  gettingPlanets: PropTypes.func.isRequired,
};
