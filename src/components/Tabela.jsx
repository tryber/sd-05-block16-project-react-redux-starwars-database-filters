import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetcherThunk } from '../actions/dataAction';
import LinhaTabela from './LinhaTabela';

class Tabela extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { planetas, isFetching, erro } = this.props;
    if (isFetching === false) {
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
    if (isFetching === true) { return (<div>Loading</div>); }
    if (erro !== '') { return (<p>{erro}</p>); }
    return (<p>ué</p>);
  }
}

const mapStateToProps = (state) => ({
  planetas: state.dataReducer.planetas,
  isFetching: state.dataReducer.isFetching,
  erro: state.dataReducer.erro,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(fetcherThunk()),
});

Tabela.propTypes = {
  onLoad: PropTypes.func,
  planetas: PropTypes.instanceOf(Array),
  erro: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
