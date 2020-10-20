import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function bodyRender(planeta) {
  return (
    <tr key={planeta.name}>
      <td>{planeta.name}</td>
      <td>{planeta.rotation_period}</td>
      <td>{planeta.orbital_period}</td>
      <td>{planeta.diameter}</td>
      <td>{planeta.climate}</td>
      <td>{planeta.gravity}</td>
      <td>{planeta.terrain}</td>
      <td>{planeta.surface_water}</td>
      <td>{planeta.population}</td>
      <td>{planeta.films}</td>
      <td>{planeta.created}</td>
      <td>{planeta.edited}</td>
      <td>{planeta.url}</td>
    </tr>
  );
}

const colunasNumericas = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class TBody extends Component {
  constructor(props) {
    super(props);
    this.filtroNumerico = this.filtroNumerico.bind(this);
  }

  filtroNumerico(planetas) {
    const { filtros } = this.props;
    let planetasFiltrados = planetas;
    filtros.forEach((filtro) => {
      const { column, comparison, value } = filtro;
      if (comparison === 'maior que') {
        planetasFiltrados = planetasFiltrados.filter((planeta) => planeta[column] > Number(value));
      }
      if (comparison === 'menor que') {
        planetasFiltrados = planetasFiltrados.filter((planeta) => planeta[column] < Number(value));
      }
      if (comparison === 'igual a') {
        planetasFiltrados = planetasFiltrados.filter((planeta) => planeta[column] === value);
      }
    });
    return planetasFiltrados;
  }

  ordenaPlaneta(planetasAlterados) {
    const { ordem } = this.props;
    let ordenado = [];
    if (colunasNumericas.includes(ordem.column)) {
      ordenado = planetasAlterados.sort(
        (a, b) => Number(a[ordem.column]) - Number(b[ordem.column])
      );
    } else {
      ordenado = planetasAlterados.sort((a, b) =>
        a[ordem.column.toLowerCase()] > b[ordem.column.toLowerCase()] ? 1 : -1
      );
    }
    if (ordem.sort === 'DESC') {
      return ordenado.reverse();
    }
    return ordenado;
  }

  render() {
    const { planetas, names, filtros } = this.props;
    let planetasAlterados = planetas;
    if (filtros.length > 0) {
      planetasAlterados = this.filtroNumerico(planetas);
    }

    planetasAlterados = this.ordenaPlaneta(planetasAlterados);

    return (
      <tbody>
        {planetasAlterados
          .filter((planeta) => planeta.name.includes(names))
          .map((planeta) => bodyRender(planeta))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planetas: state.apiReducer.data.results,
  names: state.filters.filterByName.name,
  filtros: state.filters.filterByNumericValues,
  ordem: state.filters.order,
});

export default connect(mapStateToProps)(TBody);

TBody.propTypes = {
  planetas: PropTypes.instanceOf(Array).isRequired,
  names: PropTypes.string.isRequired,
  filtros: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  ordem: PropTypes.instanceOf(Object).isRequired,
};
