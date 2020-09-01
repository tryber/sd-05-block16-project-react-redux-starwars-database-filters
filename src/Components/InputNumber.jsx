import React, { Component } from 'react';
import './InputNumber.css';

class InputNumber extends Component {
  render() {
    return (
      <div>
        <label htmlFor="inputNumber">
          <input className="input-number-filter" data-testid="value-filter" type="number" name="inputNumber" />
        </label>
      </div>
    );
  }
}

export default InputNumber;
