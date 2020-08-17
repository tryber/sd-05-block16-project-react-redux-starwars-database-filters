import React from 'react';
import PropTypes from 'prop-types';

const SelectComparison = (props) => {
  const { change } = props;
  return (
    <div>
      <select
        data-testid="comparison-filter"
        onChange={change}
      >
        <option>Compare</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </div>
  );
};

SelectComparison.propTypes = {
  change: PropTypes.func.isRequired,
};

export default SelectComparison;
