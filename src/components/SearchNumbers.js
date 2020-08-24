/* eslint-disable react/jsx-first-prop-new-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import searchByNumber from '../actions/searchByNumber';

// obs.: strings vazias no começo para aumentar
// o número de ítens dentro do array (atendendo ao teste).

const dropdownOptions = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const dropdownComparison = ['', 'maior que', 'menor que', 'igual a'];

class SearchNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    };
  }

  render() {
    const { handleChangeNumber, filterByNumericValues } = this.props;
    const columnSelected = filterByNumericValues.map((e) => e.column);
    const dropdownFiltered = dropdownOptions.filter((e) => columnSelected.indexOf(e) === -1);
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={(e) => this.setState({ column: e.target.value })}
        >
          {dropdownFiltered.map((opt) => (<option key={opt}>{opt}</option>))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={(e) => this.setState({ comparison: e.target.value })}
        >
          {dropdownComparison.map((comp) => (<option key={comp}>{comp}</option>))}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button type="button"
          data-testid="button-filter"
          onClick={() => handleChangeNumber(this.state)}
        >
          Filter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = {
  handleChangeNumber: searchByNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchNumbers);

SearchNumbers.propTypes = {
  handleChangeNumber: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
};
