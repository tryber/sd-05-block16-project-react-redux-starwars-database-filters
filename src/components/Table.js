import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchPlanets from '../actions/fetchPlanets';

class Table extends Component {
  componentDidMount() {
    this.props.planetsData();
  }

  // Algoritmo dessa função feito em grupo
  applyFilters() {
    const { data, filterByName, filterByNumbers } = this.props;
    let planets = data;

    if (filterByName !== '') {
      planets = data.filter((planet) => planet.name.includes(filterByName.name));
    }
    if (filterByNumbers.length > 0 && planets.length > 1) {
      filterByNumbers.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          planets = planets.filter((planet) => Number(planet[column]) > Number(value));
        } else if (comparison === 'igual a') {
          planets = planets.filter((planet) => Number(planet[column]) === Number(value));
        } else if (comparison === 'menor que') {
          planets = planets.filter((planet) => Number(planet[column]) < Number(value));
        } else {
          planets = null;
        }
      });
    }
    return planets;
  }

  renderTableHead() {
    const { data } = this.props;

    return (
      <thead>
        <tr key={data.name}>
          <th><strong>Name</strong></th>
          <th><strong>Rotation Period</strong></th>
          <th><strong>Orbital Period</strong></th>
          <th><strong>Diameter</strong></th>
          <th><strong>Climate</strong></th>
          <th><strong>Gravity</strong></th>
          <th><strong>Terrain</strong></th>
          <th><strong>Surface Water</strong></th>
          <th><strong>Population</strong></th>
          <th><strong>Films</strong></th>
          <th><strong>Created</strong></th>
          <th><strong>Edited</strong></th>
          <th><strong>URL</strong></th>
        </tr>
      </thead>
    );
  }


  renderTableBody() {
    const planets = this.applyFilters();

    return (
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
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
        ),
      )}
      </tbody>
    );
  }

  render() {
    const { isLoading } = this.props;

    return (isLoading)
      ? <div>Loading...</div>
      : (
        <table>
          {this.renderTableHead()}
          {this.renderTableBody()}
        </table>
      );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetReducer.data,
  isLoading: state.planetReducer.isLoading,
  filterByName: state.filters.filterByName,
  filterByNumbers: state.filters.filterByNumericValues,
});

const mapDispatchToProps = {
  planetsData: fetchPlanets,
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  planetsData: PropTypes.func.isRequired,
  filterByName: PropTypes.shape({
    filterByName: PropTypes.object,
  }).isRequired,
  filterByNumbers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
