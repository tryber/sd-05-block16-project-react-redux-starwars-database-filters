import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumericValues, selectColumn, selectComparison, selectNumber } from '../actions';

const opcoes = ['maior que', 'menor que', 'igual a'];

const menu = [
  'Coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class Select extends Component {
  renderColumn() {
    const { changeColumn, numericFilters } = this.props;
    return (
      <select data-testid="column-filter" onChange={(event) => changeColumn(event.target.value)}>
        {menu
          .filter((escolha) => !numericFilters.includes(escolha))
          .map((escolha) => (
            <option key={escolha} value={escolha}>
              {escolha}
            </option>
          ))}
      </select>
    );
  }

  renderComparison() {
    const { changeComparison } = this.props;
    return (
      <select
        data-testid="comparison-filter"
        onChange={(event) => changeComparison(event.target.value)}
      >
        <option defaultValue>Comparação</option>
        {opcoes.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }

  renderNumber() {
    const { changeNumber } = this.props;
    return (
      <input
        type="number"
        data-testid="value-filter"
        onChange={(event) => changeNumber(event.target.value)}
      />
    );
  }

  render() {
    const { column, comparison, number, filterNumber } = this.props;
    return (
      <div>
        {this.renderColumn()}
        {this.renderComparison()}
        {this.renderNumber()}
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => {
            filterNumber({ column, comparison, value: number });
          }}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  column: state.selectReducer.column,
  comparison: state.selectReducer.comparison,
  number: state.selectReducer.value,
  numericFilters: state.filters.filterByNumericValues.map((filter) => filter.column),
});

const mapDispatchToProps = (dispatch) => ({
  filterNumber: (resultado) => dispatch(filterByNumericValues(resultado)),
  changeColumn: (resultado) => dispatch(selectColumn(resultado)),
  changeComparison: (resultado) => dispatch(selectComparison(resultado)),
  changeNumber: (resultado) => dispatch(selectNumber(resultado)),
});

Select.propTypes = {
  changeColumn: PropTypes.func.isRequired,
  changeComparison: PropTypes.func.isRequired,
  changeNumber: PropTypes.func.isRequired,
  filterNumber: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  numericFilters: PropTypes.arrayOf(
    PropTypes.shape({
      column: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
