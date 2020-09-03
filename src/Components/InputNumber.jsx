import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputNumber.css';

class InputNumber extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          <input
            onChange={handleChange}
            className="input-number-filter"
            data-testid="value-filter"
            type="number"
            name="value"
          />
        </label>
      </div>
    );
  }
}

export default InputNumber;

InputNumber.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
