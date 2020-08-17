import React from 'react';
// import { numericFilter } from '../actions';

class Select extends React.Component {

  render() {
    return (
      <div>
        <select data-testid="column-filter" name="column">
          <option value="selecione">selecione</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" name="comparison">
          <option value="selecione">selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" />
        <button type="button" data-testid="button-filter">Filtrar</button>
      </div>
    );
  }
}

export default Select;
