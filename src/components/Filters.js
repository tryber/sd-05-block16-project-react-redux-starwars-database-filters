import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import filterByName from '../actions/filterPlanets';

class Filters extends Component {
  FilterName() {
    const { filterName } = this.props;

    return (
      <section>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(event) => filterName(event.target.value)}
          placeholder="Search planet by name"
        />
      </section>
    );
  }

  render() {
    return (
      <section>{this.FilterName()}</section>
    );
  }
}

const mapDispatchToProps = {
  filterName: filterByName,
};

Filters.propTypes = {
  filterName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Filters);
