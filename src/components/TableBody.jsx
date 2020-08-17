import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryFilters from '../services/queryFilters';

class TableBody extends React.Component {
  render() {
    const { data, textFilter, filters } = this.props;
    const planets = queryFilters(data, textFilter, filters);
    return (
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.terrain}</td>
            <td>{planet.diameter}</td>
            <td>{planet.gravity}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.starWars.data,
  textFilter: state.filters.filterByName.name,
  filters: state.filters.filterByNumericValues,
});

TableBody.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  textFilter: PropTypes.string.isRequired,
  filters: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(TableBody);
