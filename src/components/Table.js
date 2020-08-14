import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cabecalho from './Cabecalho';

class Table extends Component {

  filter(planets, filtro) {
    
    if (filtro.comparison === 'maior que') {
      return planets.filter(e => Number(e[filtro.column]) > Number(filtro.value));
    }
    if (filtro.comparison === 'menor que') {
      return planets.filter(e => Number(e[filtro.column]) < Number(filtro.value));
    }
    if (filtro.comparison === 'igual a') {
      return planets.filter(e => Number(e[filtro.column]) === Number(filtro.value));
    }
    return planets;
    
  }

  render() {
    const { data, filterByName, filterByNumericValues } = this.props;
    if (!data) return <div>Sem dados</div>;
    let planets = data;
    filterByNumericValues.forEach(filtro => {planets = this.filter(planets, filtro)} )
    return (
      <div>
        <table>
          <Cabecalho />
          <tbody>
            {planets.filter((e) => e.name.includes(filterByName))
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
                );})}
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
