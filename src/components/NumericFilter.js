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

  render() {
    return (
      <div>
        <select data-testid="column-filter" id="column-filter">
          <option value="column">coluna</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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

export default connect(null, mapDispatchToProps)(NumericFilter);

NumericFilter.propTypes = {
  numericSearch: PropTypes.func.isRequired,
};
