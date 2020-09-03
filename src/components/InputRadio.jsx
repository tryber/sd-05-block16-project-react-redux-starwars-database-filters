import React from 'react';

export default function InputRadio(id, value, onClick) {
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
