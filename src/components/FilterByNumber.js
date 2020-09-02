/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNumber } from '../actions/index';

const selectFunction = (array) => (array.map((opt) => <option key={opt}>{opt}</option>));

const comparison = [[], 'maior que', 'igual a', 'menor que'];
const col = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

class filterByNumeric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: 1000,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(element) {
    this.setState({ [element.target.id]: element.target.value });
  }

  render() {
    const { handleClick, filterColumn } = this.props;
    const filterRedux = filterColumn.map((opt) => opt.column);
    const filterActive = col.filter((filt) => !filterRedux.includes(filt));
    return (
      <div>
        <select id="column" data-testid="column-filter" onChange={this.handleChange}>
          <option>Coluna</option>
          {selectFunction(filterActive)}
        </select>
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={this.handleChange}
        >
          {selectFunction(comparison)}
        </select>
        <label htmlFor="value">
          <input
            id="value"
            data-testid="value-filter"
            type="number"
            onChange={this.handleChange}
          />
        </label>
        <button type="button" data-testid="button-filter" onClick={() => handleClick(this.state)}>
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterColumn: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (e) => dispatch(filterNumber(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(filterByNumeric);

filterByNumeric.propTypes = {
  handleClick: propTypes.shape({
    column: propTypes.string.isRequired,
    comparison: propTypes.string.isRequired,
    values: propTypes.number.isRequired,
  }).isRequired,
  filterColumn: propTypes.arrayOf({
    column: propTypes.string.isRequired,
    comparison: propTypes.string.isRequired,
    values: propTypes.number.isRequired,
  }).isRequired,
};
