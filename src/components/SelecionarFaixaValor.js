import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import selectComparacao from '../actions/selectComparacao';

const arrayValores = ['maior que', 'igual a', 'menor que'];

class SelecionarFaixaValor extends React.Component {
  render() {
    return (
      <div>
        <select
          data-testid="comparison-filter" placeholder="Comparação"
          onChange={(e) => this.props.valorComparacao(e.target.value)}
        >
          <option>Comparação</option>
          { arrayValores.map((faixa) => <option value={faixa}>{faixa}</option>) }
        </select>
        <br />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  valorComparacao: (valorSelecionado) => dispatch(selectComparacao(valorSelecionado)),
});

SelecionarFaixaValor.propTypes = {
  valorComparacao: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default connect(null, mapDispatchToProps)(SelecionarFaixaValor);
