import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes, { object } from 'prop-types';

class TableBody extends Component {
  render() {
    const { planets, error } = this.props;
    return (!error) ? (
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.population}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
            <td>
              {planet.films.map((film) => (
                <li key={film}>{film}</li>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    ) : <div>{error.message}</div>;
  }
}

const mapStateToProps = (state) => {
  const { filters: { filterByName: { name } } } = state;
  const { fetchReducer: { data, error } } = state;
  return {
    name,
    planets: (name) ? data.filter((planet) => planet.name.includes(name)) : data,
    error,
  };
};

export default connect(mapStateToProps)(TableBody);


TableBody.propTypes = {
  planets: propTypes.arrayOf(object).isRequired,
  error: propTypes.string,
};

TableBody.defaultProps = {
  error: 'Erro no servidor',
};

// validacao de propTypes seguindo exemplos do conteudo do course.
// duvidas tiradas na validacao da chave 'data:' junto ao PR no repositorio do Felipe Vieira
