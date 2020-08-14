import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cabecalho from './Cabecalho';

class Table extends Component {

  filter() {
    const { filterByNumericValues, data } = this.props;
    filterByNumericValues.forEach(filtro => {
      if (filtro.comparison === 'maior que') {
        data.filter(e => e[filtro.column] > filtro.value);
      }
      if (filtro.comparison === 'menor que') {
        data.filter(e => e[filtro.column] < filtro.value);
      }
      if (filtro.comparison === 'igual a') {
        data.filter(e => e[filtro.column] === filtro.value);
      }
    })
  }

  render() {
    const { data, filterByName } = this.props;
    if (!data) return <div>Sem dados</div>;
    return (
      <div>
        <table>
          <Cabecalho />
          <tbody>
            {data.filter((e) => e.name.includes(filterByName))
              .map(planet => {
                return (
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
                    <td>{planet.films.map((e, i) => <div key={i}>{e}</div>)}</td>
                    <td>{planet.created}</td>
                    <td>{planet.edited}</td>
                    <td>{planet.url}</td>

                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.getPlanets.error,
  isFetching: state.getPlanets.isFetching,
  data: state.getPlanets.data.results,
  filterByName: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(Table);
