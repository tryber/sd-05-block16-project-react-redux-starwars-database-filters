import React from 'react';
import SelectOptions from './SelectOptions';
import InputNumber from './InputNumber';
import './NumericFilter.css';
import ButtonFilter from './ButtonFilter';

const DATA_TESTID = {
  COLUMN_FILTER: 'column-filter',
  COMPARISON_FILTER: 'comparison-filter',
};

export default class NumericFilters extends React.Component {
  render() {
    return (
      <div className="numeric-filter-container">
        <div className="numeric-selections">
          <SelectOptions
            testId={DATA_TESTID.COLUMN_FILTER}
            key={DATA_TESTID.COLUMN_FILTER}
          />
          <SelectOptions
            testId={DATA_TESTID.COMPARISON_FILTER}
            key={DATA_TESTID.COMPARISON_FILTER}
          />
        </div>
        <InputNumber />
        <ButtonFilter />
      </div>
    );
  }
}
