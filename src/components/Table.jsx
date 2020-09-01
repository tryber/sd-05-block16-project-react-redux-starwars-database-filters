import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from '../actions';
import TableHead from './TableHead';

// lógica da function retirada do repo de diversos colegas, principalmente da Julliete e Marina

function allFilters(data, filter) {
  if (filter.comparison === 'maior que') {
    return data.filter((planet) => Number(planet[filter.column]) > filter.value);
  }
  if (filter.comparison === 'menor que') {
    return data.filter((planet) => Number(planet[filter.column]) < filter.value);
  }
  if (filter.comparison === 'igual') {
    return data.filter((planet) => Number(planet[filter.column]) === filter.value);
  }
  return data;
}

class Table extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    const { data, nameFilter, numericFilter } = this.props;
    let planets = data;
    numericFilter.forEach((filter) => { planets = allFilters(data, filter); });
    return (
      <div>
        <table>
          <TableHead />
          {planets.filter((planet) => planet.name.includes(nameFilter))
          // lógica do filter consultada no repo da Juliette
            .map((planet) => (
              <tbody>
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
                  <td key={planet.created}>{planet.created}</td>
                  <td key={planet.edited}>{planet.edited}</td>
                  <td key={planet.url}>{planet.url}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
  nameFilter: state.filters.filterByName.name,
  numericFilter: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // trecho baseado no repo de varios colegas
  /* isFetching: PropTypes.bool.isRequired, */
  getPlanets: PropTypes.func.isRequired,
  nameFilter: PropTypes.shape({
    filters: { filterByName: PropTypes.object },
  }).isRequired,
  numericFilter: PropTypes.shape({
    filters: { filterByNumericValues: PropTypes.arrayOf(PropTypes.object) },
  }).isRequired,
};
