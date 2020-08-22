import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class TableBody extends Component {
  render() {
    const { data, filterByName } = this.props;
    const filteredPlanetsByName = data.filter((planets) => planets.name.includes(filterByName));
    console.log(filteredPlanetsByName);
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
  filterByName: state.filters.filterByName.name,
});

TableBody.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  filterByName: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(TableBody);
