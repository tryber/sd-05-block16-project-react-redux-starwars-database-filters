import React from 'react';

class FiltroNumericos extends React.Component {
  render() {
    return (
      <div>
        <select data-testid="column-filter">
          <option disabled selected>Coluna</option>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select data-testid="comparison-filter">
          <option disabled selected>Comparação</option>
          <option>Maior que</option>
          <option>Menor que</option>
          <option>Igual</option>
        </select>
        <input type="number" data-testid="value-filter" />
        <button data-testid="button-filter">Filtrar</button>
      </div>
    );
  }
}

export default FiltroNumericos;
