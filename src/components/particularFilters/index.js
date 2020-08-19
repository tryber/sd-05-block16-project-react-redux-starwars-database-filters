import React from 'react';
import PartButton from './PartButton';
import PartComparison from './PartComparison';
import PartInput from './PartInput';
import PartColumn from './PartColumn';

const PartFilters = () => (
  <div>
    <PartComparison />
    <PartColumn />
    <PartInput />
    <PartButton />
  </div>
);

export default PartFilters;
