import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';
import './SelectOptions.css';

class SelectOptions extends React.Component {
  render() {
    const { testId, name, handleChange } = this.props;
    return (
      <div>
        <select data-testid={testId} name={name} className="select-options" onChange={handleChange}>
          <SelectOption testId={testId} />
        </select>
      </div>
    );
  }
}

SelectOptions.propTypes = {
  testId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectOptions;
