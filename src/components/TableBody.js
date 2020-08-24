import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function filterNumber(allPlanets, filter) {
  switch (filter.comparison) {
    case 'maior que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) > Number(filter.value));
    case 'menor que':
      return allPlanets.filter((planet) => Number(planet[filter.column]) < Number(filter.value));
    case 'igual a':
      return allPlanets.filter((planet) => Number(planet[filter.column]) === Number(filter.value));
    default:
      return allPlanets;
  }
}

function filterName(allPlanets, filterByName) {
  return (allPlanets.filter(
    (planet) => planet.name.toLowerCase().includes(filterByName.name.toLowerCase()),
  ));
}

class TableBody extends Component {
  render() {
    const { data, filterByName, filterByNumericValues } = this.props;
    let allPlanets = data;
    filterByNumericValues.forEach((filter) => { allPlanets = filterNumber(allPlanets, filter); });
    allPlanets = filterName(allPlanets, filterByName);
    return (
      allPlanets.map((planet) => (
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
  filterByName: state.filters.filterByName,
  filterByNumericValues: state.filters.filterByNumericValues,
});

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByName: PropTypes.string.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TableBody);
