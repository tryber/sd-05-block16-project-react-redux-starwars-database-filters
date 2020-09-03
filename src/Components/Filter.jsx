import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByName } from '../Actions';
import './Filter.css';

class Filter extends Component {
  render() {
    const { filteringByName } = this.props;
    return (
      <div className="filter-container">
        <label htmlFor="filterText" className="filter-label">
          <span className="filter-label-text">Procurar</span>
          <input
            className="filter-input"
            type="text"
            name="filterText"
            data-testid="name-filter"
            onChange={({ target }) => filteringByName(target.value)}
          />
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filteringByName: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filteringByName: PropTypes.func.isRequired,
};
