import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions';

const SearchBar = ({ filterByName }) => (
  <input
    data-testid="name-filter"
    onChange={(event) => filterByName(event.target.value)}
  />
);

const mapDispatchToProps = (dispatch) => ({
  filterByName: (value) => dispatch(filterByName(value)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  filterByName: PropTypes.func.isRequired,
};
