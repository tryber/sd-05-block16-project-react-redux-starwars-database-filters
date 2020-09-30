import React from 'react';
import PropTypes from 'prop-types';

class LinhaTabela extends React.Component {

  render() {
    const { climate, diameter, gravity, name, population,
    terrain, created, edited, films, url } = this.props.planeta;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.planeta.rotation_period}</td>
        <td>{this.props.planeta.orbital_period}</td>
        <td>{diameter}</td>
        <td>{climate}</td>
        <td>{gravity}</td>
        <td>{terrain}</td>
        <td>{this.props.planeta.surface_water}</td>
        <td>{population}</td>
        <td>{created}</td>
        <td>{edited}</td>
        <td>{JSON.stringify(films)}</td>
        <td>{url}</td>
      </tr>
    );
  }
}

LinhaTabela.propTypes = {
  planeta: PropTypes.shape({
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
    films: PropTypes.instanceOf(Array),
    climate: PropTypes.string,
    diameter: PropTypes.string,
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    rotation_period: PropTypes.string,
  }).isRequired,
};

export default LinhaTabela;
