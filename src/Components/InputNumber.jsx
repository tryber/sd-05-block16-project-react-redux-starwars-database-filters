import React, { Component } from 'react';
import './InputNumber.css';

class InputNumber extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <label htmlFor="value">
          <input onChange={handleChange} className="input-number-filter" data-testid="value-filter" type="number" name="value" />
        </label>
      </div>
    );
  }
}

export default InputNumber;
