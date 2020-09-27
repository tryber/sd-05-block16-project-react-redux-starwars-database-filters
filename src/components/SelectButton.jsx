import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SelectButton = (props) => {
  const { onChange, selected, datatestid, options, onLoad } = props;
  return (
    <select onChange={onChange} selected={selected} data-testid={datatestid} >
      <option>Selecione</option>
      {options.map((option) => (
        <option value={option}>{option}</option>
    ))}
    </select>
  );
};

const mapStateToProps = (state) => ({
  optionsToRemove: state.filters.filterByNumericValues,
});

SelectButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(SelectButton);
