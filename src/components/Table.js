import React from 'react';
import { Component } from 'react';

class Table extends Component {
  render() {
    const {
      name,
      rotation_period,
      orbital_period,
      diameter, 
      climate,
      gravity, 
      terrain,
      surface_water,
      population,
      residents,
      films,
      created,
      edited,
      url,
    } = this.props;
    return(
    <table>
      <tr>
        <td>Name</td>
        <td>rotation period</td>
        <td>orbital period</td>
        <td>diameter</td>
        <td>climate</td>
        <td>gravity</td>
        <td>terrain</td>
        <td>surface water</td>
        <td>population</td>
        <td>residents</td>
        <td>films</td>
        <td>created</td>
        <td>edited</td>
        <td>url</td>
      </tr>
    </table>
    )
  }
}

export default Table;