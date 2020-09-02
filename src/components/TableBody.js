import React from 'react';
import PropTypes from 'prop-types';

class TableBody extends React.Component {
  render() {
    const {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
      films,
      created,
      edited,
      url,
    } = this.props.data;

    return (
      <tr key={this.props.key}>
        {<td>{name}</td>}
        {<td>{rotation_period}</td>}
        {<td>{orbital_period}</td>}
        {<td>{diameter}</td>}
        {<td>{climate}</td>}
        {<td>{gravity}</td>}
        {<td>{terrain}</td>}
        {<td>{surface_water}</td>}
        {<td>{population}</td>}
        {<td>{films}</td>}
        {<td>{created}</td>}
        {<td>{edited}</td>}
        {<td>{url}</td>}
      </tr>
    );
  }
}

TableBody.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableBody;
