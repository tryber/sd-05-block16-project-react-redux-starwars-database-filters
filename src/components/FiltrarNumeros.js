import React from 'react';
import { connect } from 'react-redux';
import numeroDigitado from '../actions/numeroDigitado';

class filtrarNumeros extends React.Component {
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

export default connect(null, mapDispatchToProps)(filtrarNumeros);
