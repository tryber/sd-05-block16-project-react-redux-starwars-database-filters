import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtrarPlanetsName } from '../actions/actionFilterPlanetsName';
import { filterValues } from '../actions/actionFilterPlanetsName';

const columns = [
  'Coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class FiltrosDaPagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };
    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.handleComparisonChange = this.handleComparisonChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleColumnChange(event) {
    this.setState({ column: event.target.value });
  }

  handleComparisonChange(event) {
    this.setState({ comparison: event.target.value });
  }

  handleValueChange(event) {
    this.setState({ value: event.target.value });
  }

  renderProcurar() {
    const { dispatchSearch } = this.props;
    return (
      <div>
        <label htmlFor="search">Procurar: </label>
        <input
          type="text"
          data-testid="name-filter"
          onChange={(event) => dispatchSearch(event.target.value)}
        />
      </div>
    );
  }

  /*
  O primeiro map da função renderColumns faz a filtragem do state de
  filters(column: action.column, comparison: action.comparison, value: action.value),
  retirando somente column. O segundo filter retira de columns(array que foi declarado acima)
  a opção que incluso em currentFilterColumns e
  o terceiro map cria options para cada coluna restante
  */

  renderFiltrosValoresNum() {
    const { dispatchFilterValues, filters } = this.props;

    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={this.handleColumnChange}
        >
          {columns
            .filter((option) => !filters.map((filter) => filter.column).includes(option))
            .map((option) => <option value={option}>{option}</option>)}
        </select>
        <select data-testid="comparison-filter" onChange={this.handleComparisonChange}>
          <option disabled selected>Comparação</option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input type="number" data-testid="value-filter" onChange={this.handleValueChange} />
        <button
          data-testid="button-filter"
          onClick={
            () => dispatchFilterValues(
              this.state.column,
              this.state.comparison,
              this.state.value,
            )}
        >Filtrar</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderProcurar()}
        {this.renderFiltrosValoresNum()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('filterByNumericValues', state);
  return {
    data: state.planetsReducer.data,
    filters: state.filters.filterByNumericValues,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSearch: (name) => dispatch(filtrarPlanetsName(name)),
  dispatchFilterValues: (
    column,
    comparison,
    value,
  ) => dispatch(filterValues(column, comparison, value)),
});

FiltrosDaPagina.propTypes = {
  dispatchSearch: PropTypes.func.isRequired,
  dispatchFilterValues: PropTypes.func.isRequired,
  filters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltrosDaPagina);
