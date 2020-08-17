import React, { Component } from 'react';

const options = ['Coluna', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

class SelectColumn extends Component {
  render() {
    return (
      <div className="select_column-filter">
        <label htmlFor="select" />
        <select data-testid="column-filter" name="select" onChange={() => console.log('SelectColumn')}>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>))}
        </select>
      </div>
    );
  }
}


export default SelectColumn;
