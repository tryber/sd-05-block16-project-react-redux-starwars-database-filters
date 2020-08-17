import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numericSearch } from '../actions/numericSearch';

class NumericFilter extends React.Component {

  handleClick(event) {
    event.preventDefault();
    // referência: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_value2
    const columnFilter = document.getElementById('column-filter').value;
    const comparisonFilter = document.getElementById('comparison-filter').value;
    const valueFilter = document.getElementById('value-filter').value;
    this.props.numericSearch(columnFilter, comparisonFilter, valueFilter);
  }

  handleColumnOptions() {
    const { numericFilters } = this.props;
    const selectedFilterColumns = numericFilters.map(filter => filter.column);
    let columns = [
      'column',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    columns = columns.filter(column => !selectedFilterColumns.includes(column));
    return columns.map(column => <option value={column} key={column}>{column}</option>);
  }

  render() {
    return (
      <div>
        <select data-testid="column-filter" id="column-filter">
          {this.handleColumnOptions()}
        </select>
        <select data-testid="comparison-filter" id="comparison-filter">
          <option value="comparison">comparação</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" id="value-filter" />
        <button
          onClick={(event) => this.handleClick(event)}
          data-testid="button-filter"
        >Filtrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  numericSearch: (column, comparison, value) => dispatch(numericSearch(column, comparison, value)),
});

const mapStateToProps = (state) => ({
  numericFilters: state.filters.filterByNumericValues,
})

export default connect(mapStateToProps, mapDispatchToProps)(NumericFilter);

NumericFilter.propTypes = {
  numericSearch: PropTypes.func.isRequired,
  numericFilters: PropTypes.arrayOf(PropTypes.object),
};
