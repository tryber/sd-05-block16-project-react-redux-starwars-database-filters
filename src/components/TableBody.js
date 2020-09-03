// Referência: ajuda Anderson Godoy e Felipe Vieira

import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

function filterByNumber(planets, filterComp) {
  if (filterComp.comparison === 'maior que') {
    return planets.filter((item) => Number(item[filterComp.column]) > Number(filterComp.value));
  } else if (filterComp.comparison === 'menor que') {
    return planets.filter((item) => Number(item[filterComp.column]) < Number(filterComp.value));
  } else if (filterComp.comparison === 'igual a') {
    return planets.filter((item) => Number(item[filterComp.column]) === Number(filterComp.value));
  }
  return planets;
}

const sortPlanets = (planets, sort, column) => {
  if (sort === 'DESC') {
    return planets.sort((a, b) => Number(b[column]) - Number(a[column]));
  }
  if (sort === 'ASC') {
    return planets.sort((a, b) => Number(a[column]) - Number(b[column]));
  }
  return false;
};

// Referência no sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

class TableBody extends React.Component {
  render() {
    const { data, filterText, filterNumber, column, sort } = this.props;
    // console.log(this.props);
    // let planets =  data;
    // console.log(planets);
    let planets = data;
    planets = planets.sort((a, b) => a.name.localeCompare(b.name));
    sortPlanets(planets, sort, column);

    filterNumber.forEach((filter) => {
      planets = filterByNumber(planets, filter);
    });

    // if (filterText.name !== '') {
    planets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(filterText.name.toLowerCase()));
    // }
    // console.log(filterText);

    return (
      <tbody>
        {planets.filter((planet) => planet.name.includes(filterText.name)).map((planet) => (
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
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetReducer.data,
  filterText: state.filters.filterByName,
  filterNumber: state.filters.filterByNumericValues,
  column: state.filters.order.column,
  sort: state.filters.order.sort,
});

export default connect(mapStateToProps)(TableBody);

TableBody.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  filterText: propTypes.shape({
    filterByName: propTypes.object,
  }).isRequired,
  filterNumber: propTypes.arrayOf(propTypes.object).isRequired,
  column: propTypes.string.isRequired,
  sort: propTypes.string.isRequired,
};
