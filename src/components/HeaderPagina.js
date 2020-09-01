import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filtrarPlanetsName } from '../actions/actionFilterPlanetsName';
import { filterValues } from '../actions/actionFilterPlanetsName';
import { setValueOptions } from '../actions/actionFilterPlanetsName';

class FiltrosDaPagina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
    };
    // this.handleColumnChange = this.handleColumnChange.bind(this);
    this.handleComparisonChange = this.handleComparisonChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  // handleColumnChange(event) {
  //   this.setState({ column: event.target.value });
  // }

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
    const { dispatchFilterValues, options, dispatchSetValueOptions } = this.props;
    console.log('gggg', options);
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={(event) => dispatchSetValueOptions(event.target.value)}
        >
          {options.map((option) => <option value={option}>{option}</option>)}
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
    options: state.ReducerFilter.options,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSearch: (name) => dispatch(filtrarPlanetsName(name)),
  dispatchFilterValues: (
    column,
    comparison,
    value,
  ) => dispatch(filterValues(column, comparison, value)),
  // dispatchSetValueOptions: (
  //   population,
  //   orbital_period,
  //   diameter,
  //   rotation_period,
  //   surface_water,
  // ) => dispatch(setValueOptions(
  //   population,
  //   orbital_period,
  //   diameter,
  //   rotation_period,
  //   surface_water,
  // )),
});

FiltrosDaPagina.propTypes = {
  dispatchSearch: PropTypes.func.isRequired,
  dispatchFilterValues: PropTypes.func.isRequired,
  dispatchSetValueOptions: PropTypes.func.isRequired,
  options: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltrosDaPagina);
