import React from 'react';

function Select(props) {
  const { name, onChange, id, options, label } = props;
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

export default Select;
