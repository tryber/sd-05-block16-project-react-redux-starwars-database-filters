import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchActionPlanets } from '../../actions';
import TableBody from '../TableBody';
import FilterPlanet from '../FilterPlanet';
import FilterNumeric from '../FilterNumeric';

// Lucas Staroscky

function filterNumber(allPlanets, filter) {
  switch (filter.comparison) {
    case 'maior que':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) > Number(filter.value),
      );
    case 'menor que':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) < Number(filter.value),
      );
    case 'igual a':
      return allPlanets.filter(
        (planet) => Number(planet[filter.column]) === Number(filter.value),
      );
    default:
      return allPlanets;
  }
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
      cabecalho,
      filterByName,
      filterByNumericValues,
    } = this.props;
    let allPlanets;
    if (loading) return <h1>Carregando</h1>;

    if (filterByName !== '') {
      allPlanets = planets.filter(
        (el) =>
          el.name.toLowerCase().indexOf(filterByName.name.toLowerCase()) >= 0,
      );
    }

    filterByNumericValues.forEach((filter) => {
      allPlanets = filterNumber(allPlanets, filter);
    });

    return (
      <div>
        <FilterPlanet />
        <FilterNumeric />
        <table>
          <thead>
            <tr>
              {cabecalho.map((titulo) => (
                <th key={Math.floor(Math.random() * 0x100000)}>{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading === false
              ? allPlanets.map((infoPlaneta) => (
                <TableBody data={infoPlaneta} />
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.planetR.isFetching,
  cabecalho: state.planetR.cabecalho,
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
  filterByName: PropTypes.arrayOf(PropTypes.object).isRequired,
  cabecalho: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
