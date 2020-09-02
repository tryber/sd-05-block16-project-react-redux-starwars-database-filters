import React from 'react';
import PropTypes from 'prop-types';

class TableBody extends React.Component {
  render() {
    return (
      <tr key={this.props.key}>
        {<td>{this.props.data.name}</td>}
        {<td>{this.props.data.rotation_period}</td>}
        {<td>{this.props.data.orbital_period}</td>}
        {<td>{this.props.data.diameter}</td>}
        {<td>{this.props.data.climate}</td>}
        {<td>{this.props.data.gravity}</td>}
        {<td>{this.props.data.terrain}</td>}
        {<td>{this.props.data.surface_water}</td>}
        {<td>{this.props.data.population}</td>}
        {<td>{this.props.data.films}</td>}
        {<td>{this.props.data.created}</td>}
        {<td>{this.props.data.edited}</td>}
        {<td>{this.props.data.url}</td>}
      </tr>
    );
  }
}

TableBody.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.string.isRequired,
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
