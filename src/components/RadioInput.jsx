import React from 'react';

const RadioInput = ({ options, onChange, orderSelected, datatestid }) => {
  return (
    options.map((tipo) => {
      return (
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
      )
    }
  )
  );
};

export default RadioInput;
