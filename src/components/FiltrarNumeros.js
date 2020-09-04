import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import numeroDigitado from '../actions/numeroDigitado';

class FiltrarNumeros extends React.Component {
  render() {
    return (
      <div>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(e) => this.props.valorNumero(e.target.value)}
        />
        <br />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  valorNumero: (valorDigitado) => dispatch(numeroDigitado(valorDigitado)),
});

FiltrarNumeros.propTypes = {
  valorNumero: Proptypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FiltrarNumeros);
