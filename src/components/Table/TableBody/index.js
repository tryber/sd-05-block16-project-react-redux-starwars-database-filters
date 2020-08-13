import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Films = {
  'https://swapi-trybe.herokuapp.com/api/films/1/': 'A New Hope',
  'https://swapi-trybe.herokuapp.com/api/films/2/': 'The Empire Strikes Back',
  'https://swapi-trybe.herokuapp.com/api/films/3/': 'Return of the Jedi',
  'https://swapi-trybe.herokuapp.com/api/films/4/': 'The Phantom Menace',
  'https://swapi-trybe.herokuapp.com/api/films/5/': 'Attack of the Clones',
  'https://swapi-trybe.herokuapp.com/api/films/6/': 'Revenge of the Sith',
};

class TableBody extends React.Component {
  render() {
    const { planets } = this.props;
    return (
      <tbody>
        {planets
          .map((planet) => (
            <tr key={planet.name}>
              <td><p>{planet.name}</p></td>
              <td><p>{planet.rotation_period}</p></td>
              <td><p>{planet.orbital_period}</p></td>
              <td><p>{planet.diameter}</p></td>
              <td><p>{planet.climate}</p></td>
              <td><p>{planet.gravity}</p></td>
              <td><p>{planet.terrain}</p></td>
              <td><p>{planet.surface_water}</p></td>
              <td><p>{planet.population}</p></td>
              <td>
                <p>{planet.films.map((film) => (Films[film])).join(', ')}</p>
              </td>
              <td><p>{planet.created}</p></td>
              <td><p>{planet.edited}</p></td>
              <td><p>{planet.url}</p></td>
            </tr>
          ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.API.data,
});

export default connect(mapStateToProps)(TableBody);

TableBody.defaultProps = {
  planets: undefined,
};

TableBody.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object),
};
