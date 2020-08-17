import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableBody extends Component {
  render() {
    const { data } = this.props;
    return (
      data.map((planet) => (
        <tbody key={planet.name}>
          <tr>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        </tbody>
      )));
  }
}

const mapStateToProps = (state) => ({
  data: state.requestReducer.data,
});

export default connect(mapStateToProps)(TableBody);
