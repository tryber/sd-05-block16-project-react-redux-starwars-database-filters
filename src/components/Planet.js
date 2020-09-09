import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SortFilter extends Component {
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
  planeta: PropTypes.string.isRequired,
};
