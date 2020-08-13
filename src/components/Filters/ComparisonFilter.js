import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setComparison } from '../../actions';

const ComparisonFilter = ({ setFilter }) => (
  <select onChange={({ target }) => setFilter(target.value)} data-testid="comparison-filter">
    <option value="">Comparação</option>
    <option value="maior que">maior que</option>
    <option value="igual a">igual a</option>
    <option value="menor que">menor que</option>
  </select>
);

const mapDispatchToProps = { setFilter: setComparison };

export default connect(null, mapDispatchToProps)(ComparisonFilter);

ComparisonFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
