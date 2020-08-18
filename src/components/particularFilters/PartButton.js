import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { particularFilter } from '../../actions/index';

const PartButton = (props) => {
  const { chooseFilter, column, comparison, value } = props;
  return (
    <button
      onClick={() => chooseFilter(column, comparison, value)}
      type="button"
      data-testid="button-filter"
    >
      Filter
    </button>
  );
};

const mapStateToProps = (state) => ({
  column: state.filters.newFilter.column,
  comparison: state.filters.newFilter.comparison,
  value: state.filters.newFilter.value,
});

const mapDispatchToProps = (dispatch) => ({
  chooseFilter: (a, b, c) => dispatch(particularFilter(a, b, c)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PartButton);

PartButton.propTypes = {
  setFilter: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
