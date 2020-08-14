import React, { Component } from 'react';

class HeaderTable extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface_water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
        </tr>
      </thead>
    );
  }
}

export default HeaderTable;
