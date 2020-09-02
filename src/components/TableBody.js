import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// [HA] - based in --

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

const filterInput = (planets, filterByName) => planets.filter((e) => e.name.includes(filterByName));

class TableBody extends Component {
  render() {
    const { planets, filterByName, filterByNumericValues } = this.props;
    let allPlanets = planets;
    filterByNumericValues.forEach((filter) => { allPlanets = filterNumber(allPlanets, filter); });
    allPlanets = filterInput(allPlanets, filterByName);
    return (
      allPlanets.map((planet) => (
        <tbody className="table-body">
          <tr key={planet.name}>
            <td key={planet.name}>{planet.name}</td>
            <td key={planet.rotation_period}>{planet.rotation_period}</td>
            <td key={planet.orbital_period}>{planet.orbital_period}</td>
            <td key={planet.diameter}>{planet.diameter}</td>
            <td key={planet.climate}>{planet.climate}</td>
            <td key={planet.gravity}>{planet.gravity}</td>
            <td key={planet.terrain}>{planet.terrain}</td>
            <td key={planet.surface_water}>{planet.surface_water}</td>
            <td key={planet.population}>{planet.population}</td>
            <td key={planet.films}>{planet.films}</td>
            <td key={planet.url}>{planet.url}</td>
            <td key={planet.created}>{planet.created}</td>
            <td key={planet.edited}>{planet.edited}</td>
          </tr>
        </tbody>
      )));
  }
}

const mapStateToprops = (state) => ({
  planets: state.reducer.data,
  filterByName: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

TableBody.propTypes = {
  planets: propTypes.arrayOf(propTypes.object).isRequired,
  filterByName: propTypes.string.isRequired,
  filterByNumericValues: propTypes.shape({
    column: propTypes.string.isRequired,
    comparison: propTypes.string.isRequired,
    values: propTypes.number.isRequired,
  }).isRequired,
};


export default connect(mapStateToprops)(TableBody);
