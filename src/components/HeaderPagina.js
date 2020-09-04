import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtrarPlanetsName } from '../actions/actionFilterPlanetsName';
import { filterValues } from '../actions/actionFilterPlanetsName';
import { removerFiltroDaTela } from '../actions/actionFilterPlanetsName';
import './style.css';

/*
columns representa a lista com todas as opções possíveis de coluna
*/

const columns = [
  'Coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const AllColumns = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
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

  showFilters(filters) {
    const { dispatchRemoverFiltroDaTela } = this.props;
    console.log('showFilters', filters);
    const teste = filters.map((element) =>
      <div data-testid="filter">
        <button onClick={() => dispatchRemoverFiltroDaTela(element.column)}>X</button>
        <p>{element.column} {element.comparison} {element.value}</p>
      </div>,
    );
    return teste;
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
  {columns
    .filter((option) => !filters.map((filter) => filter.column).includes(option))
    .map((option) => <option value={option}>{option}</option>)
  }
  O primeiro map da função renderColumns faz a filtragem do state de
  filters(column: action.column, comparison: action.comparison, value: action.value),
  retirando somente column. O segundo filter retira
  de columns(array que foi declarado acima)a opção que incluso em currentFilterColumns e
  o terceiro map cria options para cada coluna restante
  */

  renderFiltrosValoresNum() {
    const { dispatchFilterValues, filters } = this.props;
    // console.log('filters', filters);
    return (
      <div>
        <select
          data-testid="column-filter"
          value={this.state.column}
          onChange={this.handleColumnChange}
        > {/* Gera as options da coluna */}
          {columns
            .filter((option) => !filters.map((filter) => filter.column).includes(option))
            .map((option) => <option value={option}>{option}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          value={this.state.comparison}
          onChange={this.handleComparisonChange}
        > {/* Gera as options de comparação */}
          <option defaultValue>Comparação</option>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        {/* Gera o input com o value de comparação */}
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
        <div className="order">
          <p>Ordem</p>
          <select data-testid='column-sort'>
            {AllColumns
              .filter((option) => !filters.map((filter) => filter.column).includes(option))
              .map((option) => <option value={option}>{option}</option>)}
          </select>
          <label htmlFor="ASC"><input type="radio" value="ASC" data-testid='column-sort-input' />ASC</label>
          <label htmlFor="DSC"><input type="radio" value="DESC" data-testid='column-sort-input' />DSC</label>
          <button data-testid='column-sort-button'>Filtrar</button>
        </div>
      </div>
    );
  }

  render() {
    const { filters } = this.props;
    return (
      <div>
        {this.renderProcurar()}
        {this.renderFiltrosValoresNum()}
        <div>
          <p>Filtros {this.showFilters(filters)}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('filterByNumericValues', state);
  return {
    data: state.planetsReducer.data,
    filters: state.filters.filterByNumericValues,
    removerElementoDaTela: state.filters.removerElementoDaTela,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSearch: (name) => dispatch(filtrarPlanetsName(name)),
  dispatchFilterValues: (
    column,
    comparison,
    value,
  ) => dispatch(filterValues(column, comparison, value)),
  dispatchRemoverFiltroDaTela: (column) => dispatch(removerFiltroDaTela(column)),
});

FiltrosDaPagina.propTypes = {
  dispatchSearch: PropTypes.func.isRequired,
  dispatchFilterValues: PropTypes.func.isRequired,
  filters: PropTypes.func.isRequired,
  dispatchRemoverFiltroDaTela: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltrosDaPagina);
