import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHead from './TableHead';
import { thunkPlanet } from '../actions/index';

const filterPlanet = (planetList, filter) => {
  if (filter.length < 1) {
    return planetList;
  }
  let results = planetList;
  filter.forEach((data) => {
    const { column, comparison, value } = data;
    results = results.filter((planet) => {
      switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'igual a':
          return Number(planet[column]) === Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        default:
          return planet;
      }
    });
  });
  return results;
};

class Table extends React.Component {
  componentDidMount() {
    const { fetchPlanets } = this.props;
    fetchPlanets();
  }

  // referencia de tabelas em html5 https://flatschart.com/html5/tabelas.html

  /* tableRender() {
    const { planetData } = this.props;
    return planetData.map((data) => (
      <tr key={data.name}>
        <td>{data.name}</td>
        <td>{data.rotation_period}</td>
        <td>{data.orbital_period}</td>
        <td>{data.diameter}</td>
        <td>{data.climate}</td>
        <td>{data.gravity}</td>
        <td>{data.terrain}</td>
        <td>{data.surface_water}</td>
        <td>{data.population}</td>
        <td>{data.films}</td>
        <td>{data.created}</td>
        <td>{data.edited}</td>
        <td>{data.url}</td>
      </tr>
    ));
  } */

  tableRenderFilter = (filter, planetas) => {
    return planetas
      .filter((data) => data.name.includes(filter))
      .map((data) => (
        <tr key={data.name}>
          <td>{data.name}</td>
          <td>{data.rotation_period}</td>
          <td>{data.orbital_period}</td>
          <td>{data.diameter}</td>
          <td>{data.climate}</td>
          <td>{data.gravity}</td>
          <td>{data.terrain}</td>
          <td>{data.surface_water}</td>
          <td>{data.population}</td>
          <td>{data.films}</td>
          <td>{data.created}</td>
          <td>{data.edited}</td>
        </tr>
      ));
  };

  render() {
    const { planetData, isFetching, filter, filtroCompleto } = this.props;
    const alo = filterPlanet(planetData, filtroCompleto);
    if (!isFetching && planetData) {
      return (
        <table>
          <TableHead />
          <tbody>{this.tableRenderFilter(filter, alo)}</tbody>
        </table>
      );
    }
    return <div>Searching...</div>;
  }
}

const mapStateToProps = (state) => ({
  planetData: state.planetReducer.data,
  isFetching: state.planetReducer.isFetching,
  filter: state.filters.filterByName.name,
  filtroCompleto: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({ fetchPlanets: () => dispatch(thunkPlanet()) });

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  planetData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchPlanets: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filtroCompleto: PropTypes.string.isRequired,
};
