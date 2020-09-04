import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchActionPlanets } from '../../actions';
import FilterPlanet from '../FilterPlanet';
import FilterCombo from '../FilterCombo';
import FilterNumeric from '../FilterNumeric';
import TBody from './TBody';
import Cabecalho from './Cabecalho';
import './index.css';

// Lucas Staroscky filterNumber

function filterNumber(allPlanets, filter) {
  switch (filter.comparison) {
    case 'maior que':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) > Number(filter.value)
      );
    case 'menor que':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) < Number(filter.value)
      );
    case 'igual a':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) === Number(filter.value)
      );
    default:
      return allPlanets;
  }
}

function filterFunc(planets, filterByName, filterByNumericValues) {
  let allPlanets;

  if (filterByName !== '') {
    allPlanets = planets.filter(
      (el) =>
        el.name.toLowerCase().indexOf(filterByName.name.toLowerCase()) >= 0
    );
  }

  filterByNumericValues.forEach((filter) => {
    allPlanets = filterNumber(allPlanets, filter);
  });

  return allPlanets;
}

class Table extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const {
      loading,
      planets,
      filterByName,
      filterByNumericValues,
    } = this.props;
    const allPlanets = filterFunc(planets, filterByName, filterByNumericValues);
    if (loading) return <h1>Carregando</h1>;

    return (
      <div>
        <div className="form">
          <FilterPlanet />
          <FilterNumeric />
          <FilterCombo />
        </div>
        <table>
          <Cabecalho />
          <TBody allPlanets={allPlanets} />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.planetR.isFetching,
  planets: state.planetR.data,
  filterByName: state.filters.filterByName,
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchActionPlanets()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByName: PropTypes.object.isRequired,
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
