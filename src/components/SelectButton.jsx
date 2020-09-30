import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SelectButton = (props) => {
  const { onChange, optionSelected, datatestid, options } = props;
  return (
    <select onChange={onChange} data-testid={datatestid} >
      <option disabled>Selecione</option>
      {options.map((option) => (
        <option key={option} checked={optionSelected === option} value={option}>{option}</option>
    ))}
    </select>
  );
};

const mapStateToProps = (state) => ({
  optionsToRemove: state.filters.filterByNumericValues,
});

SelectButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  optionSelected: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(SelectButton);
