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
  }

  render() {
    const { options, filtros } = this.props;
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={(event) => this.setState({ column: event.target.value })}
        >
          <option value="" disabled selected></option>
          {options
            .filter((el) => !filtros.includes(el))
            .map((el) => (
              <option value={el}>{el}</option>
            ))}
          {/* <option value="">Choose your column</option>
          <option value="population">population</option>
          <option value="diameter">diameter</option>
          <option value="orbital_period">orbital_period</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
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
            <div data-testid="filter">
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

/* NumericFilter.propTypes = {
  pegar: propTypes.func.isRequired,
}; */
