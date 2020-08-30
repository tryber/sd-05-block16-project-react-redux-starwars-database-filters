import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtrarPlanetsName } from '../actions/actionFilterPlanetsName';
import { filterValues } from '../actions/actionFilterPlanetsName';

class FiltrosDaPagina extends React.Component {
  handleColumnChange(event) {
    this.setState({
      column: event.target.value,
    });
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
          id="search"
          onChange={(event) => dispatchSearch(event.target.value)}
        />
      </div>
    );
  }

  renderFiltrosValoresNum() {
    const { dispatchFilterValues } = this.props;
    return (
      <div>
        <select data-testid="column-filter" onChange={this.handleColumnChange}>
          <option disabled selected>Coluna</option>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select data-testid="comparison-filter" onChange={this.handleComparisonChange}>
          <option disabled selected>Comparação</option>
          <option>Maior que</option>
          <option>Menor que</option>
          <option>Igual</option>
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
  console.log('filterByNumericValues', state.column);
  return {
    column: state.reducerFilter.column,
    comparison: state.reducerFilter.comparison,
    value: state.reducerFilter.value,
    data: state.planetsReducer.data,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltrosDaPagina);
