import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtrarPlanetsName } from '../actions/actionFilterPlanetsName';
import { filterValues } from '../actions/actionFilterPlanetsName';

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
