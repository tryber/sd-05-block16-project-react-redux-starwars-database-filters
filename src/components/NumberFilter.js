/* eslint-disable lines-between-class-members */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { numberFilter } from '../actions/index';

// Add valor vazio - tamanho array
const itemsDropdown = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
const itemsComparison = ['', 'maior que', 'menor que', 'igual a'];
class NumberFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    };
  }
  // IndexOf fonte MDN
  render() {
    const { handleChangeNumber, filterByNumericValues } = this.props;
    const columnUse = filterByNumericValues.map((e) => e.column);
    const columnAvailable = itemsDropdown.filter((e) => columnUse.indexOf(e) === -1);
    return (
      <div>
        <select
          data-testid="column-filter"
          onChange={(event) => this.setState({ column: event.target.value })}>
          {columnAvailable.map(items => {
            return <option>{items}</option>;
          })}
        </select>
        <select data-testid="comparison-filter" 
        onChange={(event) => this.setState({ comparison: event.target.value })}>
          {itemsComparison.map(items => {
            return <option>{items}</option>;
          })}
        </select>
        <input type="number"
          data-testid="value-filter"
          onChange={(event) => this.setState({ value: event.target.value })} />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => handleChangeNumber(this.state)}>
          Filter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispathToProps = {
  handleChangeNumber: numberFilter,
};

export default connect(mapStateToProps, mapDispathToProps)(NumberFilter);

NumberFilter.propTypes = {
  handleChangeNumber: propTypes.func.isRequired,
};

NumberFilter.propTypes = {
  filterByNumericValues: propTypes.arrayOf(propTypes.object).isRequired,
};
