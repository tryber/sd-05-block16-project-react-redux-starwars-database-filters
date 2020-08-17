import React, { Component } from 'react';

class TableHeader extends Component {
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
          <th>Surface water</th>
          <th>Population</th>
          <th>Residents</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
