import React from 'react';

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

export default LinhaTabela;
