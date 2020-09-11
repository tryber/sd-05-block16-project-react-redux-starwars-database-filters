import React from 'react';

// console.log(Object.entries(batatinha).filter(banana =>
// banana[0] !== "residents").map(batata => batata[1]));
// Object.entries pega pares de chave e valor
// .filter filtra o a key (posição [0]) que eu não quero
// .map retorna um novo array com os valores (posição [1])
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
