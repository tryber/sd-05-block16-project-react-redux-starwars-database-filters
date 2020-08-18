import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { partValue } from '../../actions/index';

const PartInput = ({ chooseFilter }) => (
  <input
    onChange={({ target }) => chooseFilter(target.value)}
    type="text"
    data-testid="value-filter"
  />
);

const mapDispatchToProps = { chooseFilter: partValue };

export default connect(null, mapDispatchToProps)(PartInput);

PartInput.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
