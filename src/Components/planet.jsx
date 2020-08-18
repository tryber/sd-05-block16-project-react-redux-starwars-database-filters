import React from 'react';
import propTypes from 'prop-types';

function Planet(props) {
  const { planet } = props;
  const data = Object.entries(planet).filter((e) => e[0] !== 'residents');
  return (
    <tr>
      {data.map((col) => (
        <td key={`${col[1]}z`}>{col[1]}</td>
      ))}
    </tr>
  );
}

export default Planet;

Planet.propTypes = {
  planet: propTypes.instanceOf(Object).isRequired,
};
