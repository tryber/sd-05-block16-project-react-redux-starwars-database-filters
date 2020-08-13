import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNewFilter } from '../../../actions';

const Button = ({
  setFilter, column, comparison, value,
}) => (
  <button
    onClick={() => setFilter(column, comparison, value)}
    type="button"
    data-testid="button-filter"
  >
    Filter
  </button>
);

const mapStateToProps = (state) => ({
  column: state.filters.newFilter.column,
  comparison: state.filters.newFilter.comparison,
  value: state.filters.newFilter.value,
});

const mapDispatchToProps = { setFilter: setNewFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Button);

Button.propTypes = {
  setFilter: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
