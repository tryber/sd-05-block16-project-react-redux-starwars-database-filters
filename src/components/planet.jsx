import PropTypes from 'prop-types';
import React from 'react';

export default function planet(props) {
  return (
    <tr>
      <td className="table">{props.planet.name}</td>
      <td className="table">{props.planet.rotation_period}</td>
      <td className="table">{props.planet.orbital_period}</td>
      <td className="table">{props.planet.diameter}</td>
      <td className="table">{props.planet.climate}</td>
      <td className="table">{props.planet.gravity}</td>
      <td className="table">{props.planet.terrain}</td>
      <td className="table">{props.planet.surface_water}</td>
      <td className="table">{props.planet.population}</td>
      <td className="table">{props.planet.films}</td>
      <td className="table">{props.planet.created}</td>
      <td className="table">{props.planet.edited}</td>
      <td className="table">{props.planet.url}</td>
    </tr>
  );
}

planet.propTypes = {
  planet: PropTypes.instanceOf(Object).isRequired,
};
