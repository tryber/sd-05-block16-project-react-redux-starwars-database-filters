import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStarWarsPlanets } from '../actions/fetchPlanetsApi';
import Cabecalho from './Cabecalho';

class Table extends Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { data } = this.props;
    if (!data) return <div>Sem dados</div>;
    return (
      <div>
        <table>
          <Cabecalho />
          {data.map((planet) => {
            return (
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
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.getPlanets.error,
  isFetching: state.getPlanets.isFetching,
  data: state.getPlanets.data.results,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchStarWarsPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
