import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterPlanet } from '../actions/actionFilter';

class Input extends React.Component {
  render() {
    const { searchByName } = this.props;
    return (
      <div>
        <input // campo para filtrar por nome
          data-testid="name-filter"
          type="text"
          onChange={(event) => searchByName(event.target.value)}
        />
        <select data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparasion-filter">
          <option value="maior">Maior que</option>
          <option value="menor">Menor que</option>
          <option value="igual">Igual a</option>
        </select>
        <input type="number" data-testid="value-filter" />
        <button data-testis="button-filter">Adicionar Filtro</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByName: (nome) => dispatch(filterPlanet(nome)),
});

export default connect(null, mapDispatchToProps)(Input);

Input.propTypes = {
  searchByName: propTypes.func.isRequired,
};
