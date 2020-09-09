import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Planet extends Component {
  render() {
    const { planeta } = this.props;
    return (
      <tr key={planeta.name}>
        <td>{planeta.name}</td>
        <td>{planeta.rotation_period}</td>
        <td>{planeta.orbital_period}</td>
        <td>{planeta.diameter}</td>
        <td>{planeta.climate}</td>
        <td>{planeta.gravity}</td>
        <td>{planeta.terrain}</td>
        <td>{planeta.surface_water}</td>
        <td>{planeta.population}</td>
        <td>{planeta.films}</td>
        <td>{planeta.created}</td>
        <td>{planeta.edited}</td>
        <td>{planeta.url}</td>
      </tr>
    );
  }
}

Planet.propTypes = {
  planeta: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    films: PropTypes.string,
    created: PropTypes.string,
    edited: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
