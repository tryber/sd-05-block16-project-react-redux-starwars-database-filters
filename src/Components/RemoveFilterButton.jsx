import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFilter } from '../Actions';

const RemoveFilterButton = (props) => {
  const { filterIndex, removingFilter } = props;
  return (
    <button
      className="remove-filter-button"
      type="button"
      onClick={() => removingFilter(filterIndex)}
    >
      X
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removingFilter: (itemIndex) => dispatch(removeFilter(itemIndex)),
});

export default connect(null, mapDispatchToProps)(RemoveFilterButton);

RemoveFilterButton.propTypes = {
  filterIndex: PropTypes.number.isRequired,
  removingFilter: PropTypes.func.isRequired,
};
