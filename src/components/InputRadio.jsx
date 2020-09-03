import React from 'react';
import PropTypes from 'prop-types';

export default function InputRadio({ id, value, onClick }) {
  return (
    <input
      data-testid="column-sort-input"
      type="radio"
      name="order"
      id={id}
      value={value}
      onClick={onClick}
    />
  );
}

InputRadio.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
