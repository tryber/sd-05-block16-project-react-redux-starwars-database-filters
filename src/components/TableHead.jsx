import React from 'react';

class TableHead extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Orbital Period</th>
          <th>Rotation Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
    );
  }
}

export default TableHead;
