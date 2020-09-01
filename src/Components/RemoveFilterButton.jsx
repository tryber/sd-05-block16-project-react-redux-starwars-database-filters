import React from 'react';
import PropTypes from 'prop-types';

const RemoveFilterButton = (props) => {
  const { index } = props;
  return (
    <button className="remove-filter-button">X</button>
  );
};

RemoveFilterButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default RemoveFilterButton;
