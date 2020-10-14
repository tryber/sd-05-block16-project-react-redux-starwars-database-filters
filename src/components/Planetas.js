import React from 'react';
import PropTypes from 'prop-types';

function Planetas({ data }) {
  const entrada = Object.entries(data).filter((planets) => planets[0] !== 'residents');
  return (
    <tr>
      {entrada.map((tabela) => <td key={`${data.name} ${tabela[0]}`}>{tabela[1]}</td>)}
    </tr>
  );
}

Planetas.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Planetas;
