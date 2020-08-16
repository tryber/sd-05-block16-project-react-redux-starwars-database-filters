import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchPlanets from '../actions/fetchPlanets';

class Table extends Component {
  componentDidMount() {
    this.props.planetsData();
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
    const { data, filterByName } = this.props;

    return (
      <tbody>
        {data
          .filter((planet) => planet.name.includes(filterByName.name))
          .map((planet) => (
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
  filterByName: state.filterReducer.filters.filterByName,
});

const mapDispatchToProps = {
  planetsData: fetchPlanets,
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  planetsData: PropTypes.func.isRequired,
  filterByName: PropTypes.shape({
    filters: PropTypes.object,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
