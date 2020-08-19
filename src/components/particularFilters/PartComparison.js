import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { partComparison } from '../../actions/index';

const PartComparison = ({ chooseFilter }) => (
  <select onChange={({ target }) => chooseFilter(target.value)} data-testid="comparison-filter">
    <option value="">Compare</option>
    <option value="maior que">maior que</option>
    <option value="igual a">igual a</option>
    <option value="menor que">menor que</option>
  </select>
);

const mapDispatchToProps = { chooseFilter: partComparison };

export default connect(null, mapDispatchToProps)(PartComparison);

PartComparison.propTypes = {
  chooseFilter: PropTypes.func.isRequired,
};
