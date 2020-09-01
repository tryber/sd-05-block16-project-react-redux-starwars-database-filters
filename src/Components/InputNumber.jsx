import React, { Component } from 'react';


class InputNumber extends Component {
  render() {
    return (
      <div>
        <label htmlFor="inputNumber">
          <input data-testid="value-filter" type="number" name="inputNumber" />
        </label>
      </div>
    );
  }
}

export default InputNumber;
