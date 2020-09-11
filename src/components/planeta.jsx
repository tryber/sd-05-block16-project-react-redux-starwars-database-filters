import React from 'react';
import propTypes, { instanceOf } from 'prop-types';

function Planeta(props) {
  const { planeta } = props;
  return (
    <tr>
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

export default Planeta;

Planeta.propTypes = {
  filtros: propTypes.arrayOf(propTypes.string).isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  removeClick: propTypes.func.isRequired,
  filterByNumericValues: propTypes.arrayOf(instanceOf(Object)).isRequired,
  pegarNumero: propTypes.arrayOf(propTypes.string).isRequired,
};
