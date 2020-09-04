import React from 'react';
import PropTypes from 'prop-types';

// Hugo Costa
class TableBody extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <tr key={Math.floor(Math.random() * 0x100000)}>
        {<td>{data.name}</td>}
        {<td>{data.rotation_period}</td>}
        {<td>{data.orbital_period}</td>}
        {<td>{data.diameter}</td>}
        {<td>{data.climate}</td>}
        {<td>{data.gravity}</td>}
        {<td>{data.terrain}</td>}
        {<td>{data.surface_water}</td>}
        {<td>{data.population}</td>}
        {<td>{data.films}</td>}
        {<td>{data.created}</td>}
        {<td>{data.edited}</td>}
        {<td>{data.url}</td>}
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
