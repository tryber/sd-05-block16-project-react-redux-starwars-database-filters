import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fechStarWars } from '../actions';
import PlanetHeder from './planetHeder';
import Planet from './planet';
import '../App.css';

class Table extends Component {
  componentDidMount() {
    const { getCurrentSW } = this.props;
    getCurrentSW();
  }

  render() {
    const { planets, filters } = this.props;
    if (!planets) { return <h1>Loading...</h1>; }
    let planetas = planets;
    if (filters.filterByName.name !== {}) {
      planetas = planetas.filter((planeta) => planeta.name.includes(filters.filterByName.name));
    }
    filters.filterByNumericValues.forEach((filtro) => {
      const { column, comparison, value } = filtro;
      if (column !== 'COLUNAS' && comparison === 'maior que' && value !== '') {
        planetas = planetas.filter((planeta) => (planeta[column] > Number(value)));
      } else if (column !== 'COLUNAS' && comparison === 'menor que' && value !== '') {
        planetas = planetas.filter((planeta) => (planeta[column] < Number(value)));
      } else if (column !== 'COLUNAS' && comparison === 'igual a' && value !== '') {
        planetas = planetas.filter((planeta) => (Number(planeta[column]) === Number(value)));
      }
    });
    return (
      <div>
        <table className="table">
          <thead>
            <PlanetHeder />
          </thead>
          <tbody>
            {planetas.map((planet) => <Planet planet={planet} key={planet.name} />)}
          </tbody>
        </table>
        {this.props.planets.isFetching && 'Loading...'}
        {!this.props.planets.isFetching && this.props.planets.error}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.starWaresReducer.planets,
  filters: state.filters,
});

const mapDispathToProps = (dispath) => ({
  getCurrentSW: () => dispath(fechStarWars()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  filters: PropTypes.instanceOf(Object).isRequired,
  getCurrentSW: PropTypes.func.isRequired,
};

Table.defaultProps = {
  planets: undefined,
};

export default connect(mapStateToProps, mapDispathToProps)(Table);
