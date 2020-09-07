import React from 'react';
import PropTypes from 'prop-types';

const SelectButton = (props) => {
  const { onChange, selected, datatestid, options } = props;
  return (
    <select onChange={onChange} selected={selected} data-testid={datatestid} >
      <option disabled>Selecione</option>
      {options.map(({ name, value }) => (
        <option value={value} key={name} >{value}</option>
      ))}
    </select>
  );
};

SelectButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
};

export default SelectButton;
