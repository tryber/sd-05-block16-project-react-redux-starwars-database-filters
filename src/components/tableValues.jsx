import React from 'react';
import PropTypes from 'prop-types';

class TableValues extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <tr key={elements.name}>
        <td>{elements.name}</td>
        <td>{elements.rotation_period}</td>
        <td>{elements.orbital_period}</td>
        <td>{elements.diameter}</td>
        <td>{elements.climate}</td>
        <td>{elements.gravity}</td>
        <td>{elements.terrain}</td>
        <td>{elements.surface_water}</td>
        <td>{elements.population}</td>
        <td>{elements.films}</td>
        <td>{elements.created}</td>
        <td>{elements.edited}</td>
        <td>{elements.url}</td>
      </tr>
    );
  }
}
TableValues.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default TableValues;
