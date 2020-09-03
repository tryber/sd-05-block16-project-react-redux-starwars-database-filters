import React from 'react';
import PropTypes from 'prop-types';

function Body(props) {
  const { data } = props;
  return (
    <tbody>
      <tr>
        <td>{data.name}</td>
        <td>{data.rotation_period}</td>
        <td>{data.orbital_period}</td>
        <td>{data.diameter}</td>
        <td>{data.climate}</td>
        <td>{data.gravity}</td>
        <td>{data.terrain}</td>
        <td>{data.surface_water}</td>
        <td>{data.population}</td>
        <td>{data.films}</td>
        <td>{data.created}</td>
        <td>{data.edited}</td>
        <td>{data.url}</td>
      </tr>
    </tbody>
  );
}

export default Body;

/* consultado https://reactjs.org/docs/typechecking-with-proptypes.html para
construção de props arr */

Body.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
