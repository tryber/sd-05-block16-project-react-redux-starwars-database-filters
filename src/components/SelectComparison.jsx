import React, { Component } from 'react';

const options = ['Comparação', 'Maior que', 'Menor que', 'Igual a'];

class SelectComparison extends Component {
  render() {
    return (
      <div className="select_comparison-filter">
        <label htmlFor="select" />
        <select data-testid="comparison-filter" name="select" onChange={(e) => console.log(e)}>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>))}
        </select>
      </div>
    );
  }
}


export default SelectComparison;
