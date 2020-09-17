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

class TBody extends Component {
  constructor(props) {
    super(props);
    this.filtroNumerico = this.filtroNumerico.bind(this);
  }

  filtroNumerico() {
    const { planetas, filtros } = this.props;
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
    return planetasFiltrados.map((planeta) => bodyRender(planeta));
  }

  render() {
    const { planetas, names, filtros } = this.props;
    if (filtros.length > 0) {
      return <tbody>{this.filtroNumerico()}</tbody>;
    }

    return (
      <tbody>
        {planetas
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
});

export default connect(mapStateToProps)(TBody);

TBody.propTypes = {
  planetas: PropTypes.instanceOf(Array).isRequired,
  names: PropTypes.string.isRequired,
  filtros: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};
