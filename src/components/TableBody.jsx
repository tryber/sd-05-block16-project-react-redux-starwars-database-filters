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
  const { filterReducer: { filters: { filterByName: { name } } } } = state;
  const { fetchReducer: { data, error } } = state;
  return {
    name,
    planets: (name) ? data.filter((one) => one.name.includes(name)) : data,
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

// const attribute = ['name', 'climate', 'population', 'created', 'diameter', 'edited',
//   'gravity', 'orbital_period', 'rotation_period',
//   'surface_water', ' terrain', 'url', 'films'];
