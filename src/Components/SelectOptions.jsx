import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';
import './SelectOptions.css';

class SelectOptions extends React.Component {
  render() {
    const { testId, name, handleChange } = this.props;
    return (
      <div>
        <select
          data-testid={testId}
          name={name}
          value={this.value}
          className="select-options"
          onChange={handleChange}
        >
          <option>{testId === 'column-filter' ? 'Coluna' : 'Comparação'}</option>
          <SelectOption testId={testId} handleChange={handleChange} name={name} />
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
