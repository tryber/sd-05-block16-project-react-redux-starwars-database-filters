import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterName, filterByNumeric } from '../actions';

class FilterBar extends Component {
  render() {
    const { nameInput, filterByNum } = this.props;
    const columnOpt = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const comparisonOpt = ['maior que', 'menor que', 'igual a'];
    const allValues = {};
    return (
      <div>
        <input
          data-testid="name-filter"
          type="text"
          name="name-filter"
          onChange={(e) => nameInput(e.target.value)}
        />
        <div>
          <select required data-testid="column-filter" onChange={(e) => { allValues.column = e.target.value; }}>
            <option disabled selected>Coluna</option>
            {columnOpt.map((item) => <option value={item}>{item}</option>)}
          </select>
          <select required data-testid="comparison-filter" onChange={(e) => { allValues.comparison = e.target.value; }}>
            <option disabled selected>Comparacao</option>
            {comparisonOpt.map((item) => <option value={item}>{item}</option>)}
          </select>
          <div>
            <input required type="number" data-testid="value-filter" onChange={(e) => { allValues.num = e.target.value; }} />
          </div>
        </div>
        <button data-testid="button-filter" type="submit" onClick={() => 
          (allValues.column && allValues.comparison && allValues.num) ?
          filterByNum(allValues.column, allValues.comparison, allValues.num) : ''}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  nameInput: (inputText) => dispatch(filterName(inputText)),
  filterByNum: (column, comparison, value) => dispatch(filterByNumeric(column, comparison, value)),
});

export default connect(null, mapDispatchToProps)(FilterBar);

FilterBar.propTypes = {
  nameInput: propTypes.func.isRequired,
  filterByNum: propTypes.func.isRequired,
};
