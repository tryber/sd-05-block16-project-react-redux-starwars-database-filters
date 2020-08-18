import React from 'react';
import propTypes from 'prop-types';

function Select(props) {
  const {
    dataTestId,
    onChange,
    defaultOpt,
    arrayOpt,
  } = props;
  return (
    <select data-testid={dataTestId} required onChange={onChange}>
      <option disabled selected>{defaultOpt}</option>
      {arrayOpt.map((item) => <option key={item} value={item}>{item}</option>)}
    </select>
  );
}

export default Select;

Select.propTypes = {
  dataTestId: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  defaultOpt: propTypes.arrayOf(propTypes.string).isRequired,
  arrayOpt: propTypes.arrayOf(propTypes.string).isRequired,
};
