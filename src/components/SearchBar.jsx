import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../actions';

const SearchBar = ({ nameFilter }) => (
  <input
    data-testid="name-filter"
    onChange={(event) => nameFilter(event.target.value)}
  />
);

const mapDispatchToProps = (dispatch) => ({
  nameFilter: (value) => dispatch(filterByName(value)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  nameFilter: PropTypes.func.isRequired,
};

/* Transparencia: Felipe me auxiliou a corrigir um erro de CC do parâmetro de
SearchBar que estava reclamando de Redundância.. alterei o filterByName para
nameFilter para evitar essa redundância. */
