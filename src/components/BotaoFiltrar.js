import React from 'react';
import { connect } from 'react-redux';
import filtroCompleto from '../actions/filtroCompleto';

class botaoFiltrar extends React.Component {
  
  handleClick = () => {
    console.log(this.props)
    const { coluna, comparacao, valor, filter } = this.props;
    filter({ column: coluna, comparison: comparacao, value: valor })
  }
  
  render() {
    return (
      <div>
        <button
          data-testid="button-filter"
          onClick={ this.handleClick }
        >
          Filtrar
        </button>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  coluna: state.select.column,
  comparacao: state.select.comparison,
  valor: state.select.value,
});

const mapDispatchToProps = (dispatch) => ({
  filter: (objetao) => dispatch(filtroCompleto(objetao)),
});

export default connect(mapStateToProps, mapDispatchToProps)(botaoFiltrar);
