import React from 'react';
import PropTypes from 'prop-types';
import LinhaTabela from './LinhaTabela';

class Tabela extends React.Component {
  render() {
    const { planetas } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Dia</th>
            <th>Ano</th>
            <th>Diâmetro</th>
            <th>Clima</th>
            <th>Gravidade</th>
            <th>Terreno</th>
            <th>Agua na Superfície</th>
            <th>População</th>
            <th>Criado</th>
            <th>Editado</th>
            <th>Filmes</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planetas.map((planeta) => (<LinhaTabela planeta={planeta} key={planeta.name} />))}
        </tbody>
      </table>
    );
  }
}

Tabela.propTypes = {
  planetas: PropTypes.instanceOf(Array),
}.isRequired;

export default Tabela;
