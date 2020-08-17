import React, { Component } from 'react';

const options = ['Comparação', 'maior que', 'menor que', 'igual a'];

class SelectComparison extends Component {
  render() {
    return (
      <div className="select_comparison-filter">
        <label htmlFor="select" />
        <select data-testid="comparison-filter" name="select" onChange={() => console.log('SelectComparison')}>
          {options.map((option, i) => (
            (i > 0) ? <option key={option} value={option}>{option}</option> : false))}
        </select>
      </div>
    );
  }
}

export default SelectComparison;
