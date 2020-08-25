import React from 'react';
import { connect } from 'react-redux';

class NumericFilters extends React.Component {
  render() {
    return (
      <div>
        <select data-testid="column-filter">
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select data-testid="comparision-filter">
          <option>menor que</option>
          <option>maior que</option>
          <option>igual</option>
        </select>
        <input data-testid="value-filter" type="number" />
        <button type="button" data-testid="button-filter">Filtrar</button>
      </div>
    );
  }
}


export default connect()(NumericFilters);
