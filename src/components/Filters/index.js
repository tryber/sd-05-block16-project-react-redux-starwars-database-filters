import React from 'react';
import ColumnFilter from './ColumnFilter';
import ComparisonFilter from './ComparisonFilter';
import ValueFilter from './ValueFilter';
import Button from './FilterButton';

const Filters = () => (
  <div>
    <ColumnFilter />
    <ComparisonFilter />
    <ValueFilter />
    <Button />
  </div>
);

export default Filters;
