import React from 'react';

const RadioInput = ({ options, onChange, orderSelected, datatestid }) => (
options.map((tipo) => (
  <label
    key={tipo}
    htmlFor={tipo}
  >
    <input
      data-testid={datatestid}
      type="radio"
      tipo={tipo}
      value={tipo}
      checked={orderSelected === tipo}
      onChange={onChange}
      id={tipo}
    /> {tipo}
  </label>
))
);


export default RadioInput;
