import React from 'react';

class TableHeader extends React.Component {
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
          <th>Films</th>
          <th>Url</th>
          <th>Created</th>
          <th>Edited</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
