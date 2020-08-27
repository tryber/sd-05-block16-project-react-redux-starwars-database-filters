import React from 'react';
import PropTypes from 'prop-types';

class LinhaTabela extends React.Component {

  render() {
    const { climate, diameter, gravity, name, population, terrain } = this.props.planeta;

    return (
      <tr>
        <th>{name}</th>
        <th>{this.props.planeta.rotation_period}Horas</th>
        <th>{this.props.planeta.orbital_period}</th>
        <th>{diameter}KM</th>
        <th>{climate}</th>
        <th>{gravity}</th>
        <th>{terrain}</th>
        <th>{this.props.planeta.surface_water}</th>
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
}.isRequired;

export default LinhaTabela;
