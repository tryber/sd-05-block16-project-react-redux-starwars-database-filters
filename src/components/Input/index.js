import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { name, onChange, id, options } = props;
  return (
    <label htmlFor={name}>
      <select name={name} onChange={onChange} data-testid={id}>
        {options.map((each) => (
          <option key={each}>{each}</option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
