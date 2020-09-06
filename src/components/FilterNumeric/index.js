import React from 'react';
import Column from './Column';
import Comparison from './Comparison';
import ButtonFilter from './ButtonFilter';
import Value from './Value';
import './index.css';

function FilterNumber() {
  return (
    <div>
      <Column />
      <Comparison />
      <Value />
      <ButtonFilter />
    </div>
  );
}

export default FilterNumber;
