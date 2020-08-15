import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Cabecalho from './Cabecalho';

function filterByNumber(planets, filtro) {
  if (filtro.comparison === 'maior que') {
    return planets.filter((e) => Number(e[filtro.column]) > Number(filtro.value));
  }
  if (filtro.comparison === 'menor que') {
    return planets.filter((e) => Number(e[filtro.column]) < Number(filtro.value));
  }
  if (filtro.comparison === 'igual a') {
    return planets.filter((e) => Number(e[filtro.column]) === Number(filtro.value));
  }
  return planets;
}

function orderASC(planets, order) {
  const { column } = order;
  if (column === 'name') {
    return planets.sort((a, b) => {
      if (a[column] > b[column]) {
        return 1;
      } else if (b[column] > a[column]) {
        return -1;
      }
      return 0;
    });
  }
  return planets.sort((a, b) => a[column] - b[column]);
}

function orderDESC(planets, order) {
  const { column } = order;
  if (column === 'name') {
    return planets.sort((a, b) => {
      if (b[column] > a[column]) {
        return 1;
      } else if (a[column] > b[column]) {
        return -1;
      }
      return 0;
    });
  }
  return planets.sort((a, b) => b[column] - a[column]);
}

function orderTable(planets, order) {
  const { sort } = order;
  if (sort === 'ASC') {
    return orderASC(planets, order);
  }
  if (sort === 'DESC') {
    return orderDESC(planets, order);
  }
  return planets;
}

class Table extends Component {
  render() {
    const { data, filterByName, filterByNumericValues, order } = this.props;
    if (!data) return <div>Sem dados</div>;
    let planets = data;
    filterByNumericValues.forEach((filtro) => { planets = filterByNumber(planets, filtro); });
    planets = orderTable(planets, order);
    return (
      <div>
        <table>
          <Cabecalho />
          <tbody>
            {planets.filter((e) => e.name.includes(filterByName))
              .map((planet) => (
                <tr key={planet.name}>
                  <td>{planet.name}</td><td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td><td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films.map((e) => <div key={e}>{e}</div>)}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByName: PropTypes.string.isRequired,
  order: PropTypes.shape({
    column: PropTypes.string,
    sort: PropTypes.string,
  }).isRequired,
};

Table.defaultProps = {
  filterByNumericValues: [],
  data: [],
};

const mapStateToProps = (state) => ({
  error: state.getPlanets.error,
  isFetching: state.getPlanets.isFetching,
  data: state.getPlanets.data.results,
  filterByName: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
  order: state.filters.order,
});

export default connect(mapStateToProps)(Table);
