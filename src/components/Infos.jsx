import React from 'react';

function Infos(sacola) { // a props se chama sacola =D
  const { batatinha } = sacola;
  return (
    <tbody>
      <tr>
        <td>{batatinha.name}</td>
        <td>{batatinha.rotation_period}</td>
        <td>{batatinha.orbital_period}</td>
        <td>{batatinha.diameter}</td>
        <td>{batatinha.climate}</td>
        <td>{batatinha.gravity}</td>
        <td>{batatinha.terrain}</td>
        <td>{batatinha.surface_water}</td>
        <td>{batatinha.population}</td>
        <td>{batatinha.films}</td>
        <td>{batatinha.created}</td>
        <td>{batatinha.edited}</td>
        <td>{batatinha.url}</td>
      </tr>
    </tbody>
  );
}

export default Infos;
