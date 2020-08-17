import React, { Component } from 'react';

const planet = ['name', 'climate', 'population', 'created', 'diameter', 'edited',
  'gravity', 'orbital_period', 'rotation_period',
  'surface_water', ' terrain', 'url', 'films'];

class SelectColumn extends Component {
  render() {
    return (
      <div className="select_order-filter">
        <label htmlFor="order">Ordem</label>
        <select
          data-testid="column-sort"
          name="order"
          onChange={() => console.log('SelectOrder')}
        >
          {planet.map((attribute) => (
            <option key={attribute} value={attribute}>{attribute}</option>))}
        </select>
      </div>
    );
  }
}


export default SelectColumn;
