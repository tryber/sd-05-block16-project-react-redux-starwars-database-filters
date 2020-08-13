import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setValue } from '../../actions';

const ValueFilter = ({ setFilter }) => (
  <input
    onChange={({ target }) => setFilter(target.value)}
    type="text"
    data-testid="value-filter"
  />
);

const mapDispatchToProps = { setFilter: setValue };

export default connect(null, mapDispatchToProps)(ValueFilter);

ValueFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
