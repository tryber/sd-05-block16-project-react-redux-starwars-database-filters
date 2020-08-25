import React from 'react';
import PropTypes from 'prop-types';

class LinhaTabela extends React.Component {

  render() {
    const { climate, diameter, gravity, name, orbital_period,
      population, surface_water, terrain, rotation_period } = this.props.planeta;

    return (
      <tr>
        <th>{name}</th>
        <th>{rotation_period}Horas</th>
        <th>{orbital_period}</th>
        <th>{diameter}KM</th>
        <th>{climate}</th>
        <th>{gravity}</th>
        <th>{terrain}</th>
        <th>{surface_water}</th>
        <th>{population}</th>
      </tr>
    );
  }
}

LinhaTabela.propTypes = {
  climate: PropTypes.string,
  diameter: PropTypes.string,
  gravity: PropTypes.string,
  name: PropTypes.string,
  orbital_period: PropTypes.string,
  population: PropTypes.string,
  surface_water: PropTypes.string,
  terrain: PropTypes.string,
  rotation_period: PropTypes.string,
}.isRequired

export default LinhaTabela;
