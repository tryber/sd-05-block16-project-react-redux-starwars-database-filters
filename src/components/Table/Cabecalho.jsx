import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Cabecalho(props) {
  const { cabecalho } = props;
  return (
    <thead>
      <tr>
        {cabecalho.map((titulo) => (
          <th key={Math.floor(Math.random() * 0x100000)}>{titulo}</th>
        ))}
      </tr>
    </thead>
  );
}

const mapStateToProps = (state) => ({
  cabecalho: state.planetR.cabecalho,
});

Cabecalho.propTypes = {
  cabecalho: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Cabecalho.defaultProps = {
  errors: '',
};

export default connect(mapStateToProps)(Cabecalho);
