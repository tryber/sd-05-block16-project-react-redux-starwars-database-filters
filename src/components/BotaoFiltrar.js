import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import filtroCompleto from '../actions/filtroCompleto';

class BotaoFiltrar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /* console.log(this.props) */
    const { coluna, comparacao, valor, filter } = this.props;
    filter({ column: coluna, comparison: comparacao, value: valor });
  }
  render() {
    return (
      <div>
        <button
          data-testid="button-filter"
          onClick={this.handleClick}
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

BotaoFiltrar.propTypes = {
  filter: Proptypes.func.isRequired,
  valor: Proptypes.arrayOf(Proptypes.object).isRequired,
  comparacao: Proptypes.arrayOf(Proptypes.object).isRequired,
  coluna: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BotaoFiltrar);
