import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { pegandoNumerosAction, iniciaFiltros, removeClick } from '../actions';

class NumericFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.selectButton = this.selectButton.bind(this);
  }

  selectButton(options, filtros) {
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={(event) => this.setState({ column: event.target.value })}
        >
          <option value="" disabled defaultValue />
          {options
            .filter((el) => !filtros.includes(el))
            .map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(event) => this.setState({ comparison: event.target.value })}
        >
          <option value="">Choose your comparison</option>
          <option value="menor que">menor que</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
    );
  }
  render() {
    const { options, filtros } = this.props;
    return (
      <div>
        {this.selectButton(options, filtros)}
        <input
          type="number"
          data-testid="value-filter"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button data-testid="button-filter" onClick={() => this.props.pegarNumero(this.state)}>
          Acionar
        </button>
        <div>
          {this.props.filtros.map((filtro) => (
            <div data-testid="filter" key={filtro}>
              <button onClick={this.props.removeClick} id={filtro}>
                X
              </button>
              {filtro}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.filters.selectedOption,
  filtros: state.filters.filterByNumericValues.map((el) => el.column),
});
const mapDispatchToProps = (dispatch) => ({
  pegarNumero: (filter) => dispatch(pegandoNumerosAction(filter)),
  excluiOpcao: (opcao) => dispatch(iniciaFiltros(opcao)),
  removeClick: (column) => dispatch(removeClick(column.target.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NumericFilter);

NumericFilter.propTypes = {
  filtros: propTypes.arrayOf(propTypes.string).isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  removeClick: propTypes.func.isRequired,
  pegarNumero: propTypes.func.isRequired,
};
