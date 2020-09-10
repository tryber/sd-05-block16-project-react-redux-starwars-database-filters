import React from 'react';
import PropTypes from 'prop-types';

class Planeta extends React.Component {
  render() {
    return (
      <tr>
        { <td>{this.props.data.name}</td> }
        { <td>{this.props.data.rotation_period}</td> }
        { <td>{this.props.data.orbital_period}</td> }
        { <td>{this.props.data.diameter}</td> }
        { <td>{this.props.data.climate}</td> }
        { <td>{this.props.data.gravity}</td> }
        { <td>{this.props.data.terrain}</td> }
        { <td>{this.props.data.surface_water}</td> }
        { <td>{this.props.data.population}</td> }
        { <td>{this.props.data.films}</td> }
        { <td>{this.props.data.created}</td> }
        { <td>{this.props.data.edited}</td> }
        { <td>{this.props.data.url}</td> }
        {/* { this.props.cabec.map(titulo => <td>{this.props.data[titulo]}</td>) } */}
      </tr>
    );
  }
}

Planeta.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.number.isRequired,
    orbital_period: PropTypes.number.isRequired,
    diameter: PropTypes.number.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.number.isRequired,
    population: PropTypes.number.isRequired,
    films: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    edited: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Planeta;
