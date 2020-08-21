import React from 'react';

class Headers extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default Headers;
/* Estrutura retirada dos exercícios do bloco 16 */
