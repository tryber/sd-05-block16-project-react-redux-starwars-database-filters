import React from 'react';
import PropTypes, { instanceOf } from 'prop-types';

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
}

SelectButton.propTypes = {
  options: instanceOf(Array).isRequired,
}

export default SelectButton;
