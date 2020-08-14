import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchPlanets from '../actions/fetchPlanets';

class Table extends Component {
  componentDidMount() {
    this.props.planetsData();
  }

  renderTableHead() {
    return (
      <thead>
        <tr>
          <th><strong>Name</strong></th>
          <th><strong>Rotation Period</strong></th>
          <th><strong>Orbital Period</strong></th>
          <th><strong>Diameter</strong></th>
          <th><strong>Climate</strong></th>
          <th><strong>Gravity</strong></th>
          <th><strong>Terrain</strong></th>
          <th><strong>Surface Water</strong></th>
          <th><strong>Population</strong></th>
          {/* <th><strong>Films</strong></th>
          <th><strong>Created</strong></th>
          <th><strong>Edited</strong></th>
          <th><strong>URL</strong></th> */}
        </tr>
      </thead>
    );
  }

  renderTableBody() {
    const { data } = this.props;

    return (
      <tbody>
        {data.map((planet) => (
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
            {/* <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td> */}
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
});

const mapDispatchToProps = {
  planetsData: fetchPlanets,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
