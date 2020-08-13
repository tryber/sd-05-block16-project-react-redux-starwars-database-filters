import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterPlanet } from '../actions';

class Filter extends Component {
  render() {
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(event) => this.props.filterPlanet(event.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  filterPlanet: (planet) => dispatch(filterPlanet(planet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filterPlanet: PropTypes.func.isRequired,
};
