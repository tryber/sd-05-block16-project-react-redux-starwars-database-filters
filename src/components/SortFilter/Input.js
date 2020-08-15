import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ children, onClick }) => (
  <input
    data-testid="column-sort-input"
    onClick={(event) => onClick(event)}
    name="sort"
    id={children}
    type="radio"
    value={children}
  />
);

export default Input;

Input.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
