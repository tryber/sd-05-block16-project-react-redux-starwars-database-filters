import React from 'react';
import PropTypes from 'prop-types';

const FilterInput = (props) => {
  const { change } = props;
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={change}
      />
    </div>
  );
};

FilterInput.propTypes = {
  change: PropTypes.func.isRequired,
};
export default FilterInput;
