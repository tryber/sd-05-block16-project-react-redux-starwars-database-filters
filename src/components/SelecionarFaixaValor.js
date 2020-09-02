import React from 'react';
import { connect } from 'react-redux';


const arrayValores = ['maior que', 'igual a', 'menor que'];

class SelecionarFaixaValor extends React.Component {
  render() {
    return (
      <div>
        <select data-testid="comparison-filter" placeholder="Comparação">
          <option>Comparação</option>
          { arrayValores.map((faixa) => <option>{faixa}</option>) }
        </select>
        <br />
        <br />
      </div>
    );
  }
}

export default connect()(SelecionarFaixaValor);
