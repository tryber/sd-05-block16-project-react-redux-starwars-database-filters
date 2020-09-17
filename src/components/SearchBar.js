import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filtraNomesAction, filtraValoresAction, deletFilterAction } from '../action';

const colunas = [
  'selected',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparacoes = ['selected', 'maior que', 'menor que', 'igual a'];

function criaColunas(handleChangeColunm, filtrosUsados) {
  return (
    <select data-testid="column-filter" onChange={handleChangeColunm}>
      {colunas
        .filter((coluna) => !filtrosUsados.includes(coluna))
        .map((coluna) => (
          <option key={coluna}>{coluna}</option>
        ))}
    </select>
  );
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeColunm = this.handleChangeColunm.bind(this);
    this.handleChangeComparison = this.handleChangeComparison.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { filtrarNomes } = this.props;
    filtrarNomes(event.target.value);
  }

  handleChangeColunm(event) {
    this.setState({ column: event.target.value });
  }

  handleChangeComparison(event) {
    this.setState({ comparison: event.target.value });
  }

  handleChangeValue(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    const { filtrarPlanetas } = this.props;
    const { column, comparison, value } = this.state;
    // if (column !== '' || comparison !== '' || typeof value * 1 === 'number') {
    filtrarPlanetas(column, comparison, value);
    // this.setState({ column: '', comparison: '', value: '' });
  }

  render() {
    const { filtrosUsados, resumoFiltros, deletaFiltros } = this.props;
    return (
      <div>
        <input data-testid="name-filter" onChange={this.handleChange} />
        {criaColunas(this.handleChangeColunm, filtrosUsados)}
        <select data-testid="comparison-filter" onChange={this.handleChangeComparison}>
          {comparacoes.map((comparacao) => (
            <option key={comparacao}>{comparacao}</option>
          ))}
        </select>
        <input data-testid="value-filter" type="number" onChange={this.handleChangeValue} />
        <button data-testid="button-filter" onClick={this.handleSubmit}>
          BUSCAR
        </button>
        <div>
          {resumoFiltros.map((value) => (
            <div data-testid="filter" key={value.column}>
              {`${value.column} ${value.comparison} ${value.value}`}
              <button onClick={() => deletaFiltros(value.column)}>X</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filtrosUsados: state.filters.filterByNumericValues.map((value) => value.column),
  resumoFiltros: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filtrarNomes: (name) => dispatch(filtraNomesAction(name)),
  filtrarPlanetas: (column, comparison, value) =>
    dispatch(filtraValoresAction(column, comparison, value)),
  deletaFiltros: (column) => dispatch(deletFilterAction(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  filtrarNomes: PropTypes.instanceOf(Object).isRequired,
  filtrarPlanetas: PropTypes.instanceOf(Object).isRequired,
  deletaFiltros: PropTypes.func.isRequired,
  resumoFiltros: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  filtrosUsados: PropTypes.arrayOf(String).isRequired,
};
