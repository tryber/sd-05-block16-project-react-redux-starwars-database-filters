import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFilter, toggleRender } from '../Actions';

const RemoveFilterButton = (props) => {
  const {
    filterIndex, removingFilter, togglingRender, column,
  } = props;
  return (
    <button
      className="remove-filter-button"
      type="button"
      onClick={() => {
        removingFilter(filterIndex);
        togglingRender(column);
      }}
    >
      X
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removingFilter: (itemIndex) => dispatch(removeFilter(itemIndex)),
  togglingRender: (payload) => dispatch(toggleRender(payload)),
});

export default connect(null, mapDispatchToProps)(RemoveFilterButton);

RemoveFilterButton.propTypes = {
  column: PropTypes.string.isRequired,
  filterIndex: PropTypes.number.isRequired,
  removingFilter: PropTypes.func.isRequired,
  togglingRender: PropTypes.func.isRequired,
};
