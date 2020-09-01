/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNumber } from '../actions/index';

const col = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const comparison = [[], 'maior que', 'igual a', 'menor que'];

const selectFunction = (array) => (array.map((opt) => <option key={opt}>{opt}</option>));

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
    const { handleClick } = this.props;
    return (
      <div>
        <select id="column" data-testid="column-filter" onChange={this.handleChange}>
          <option>Coluna</option>
          {selectFunction(col)}
        </select>
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={this.handleChange}
        >
          {selectFunction(comparison)}
        </select>
        <label htmlFor="">
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

const mapDispatchToProps = (dispatch) => ({
  handleClick: (e) => dispatch(filterNumber(e)),
});

export default connect(null, mapDispatchToProps)(filterByNumeric);

filterByNumeric.propTypes = {
  handleClick: propTypes.shape({
    column: propTypes.string.isRequired,
    comparison: propTypes.string.isRequired,
    values: propTypes.number.isRequired,
  }).isRequired,
};
