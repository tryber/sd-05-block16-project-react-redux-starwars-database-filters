import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onChangeColumn, onChangeComparison, onChangeValue, filterNumber } from '../../actions';

function FilterNumber(props) {
  const { column, comparison, value } = props;
  const optionComparison = [[], 'maior que', 'igual a', 'menor que'];
  const optionColumn = ['Coluna', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={(e) => props.changeColumn(e.target.value)}
      >
        {optionColumn.map((opt) => <option key={opt}>{opt}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(e) => props.changeComparison(e.target.value)}
      >
        {optionComparison.map((opt) => <option key={opt}>{opt}</option>)}
      </select>
      <label htmlFor="value">
        <input
          data-testid="value-filter"
          type="number"
          onChange={(e) => props.changeValue(e.target.value)}
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => props.handleClick(column, comparison, value)}
      >
        Filtrar
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeColumn(filter) {
    const action = onChangeColumn(filter);
    dispatch(action);
  },
  changeComparison(filter) {
    const action = onChangeComparison(filter);
    dispatch(action);
  },
  changeValue(filter) {
    const action = onChangeValue(filter);
    dispatch(action);
  },
  handleClick: (a, b, c) => dispatch(filterNumber(a, b, c)),
});

const mapStateToProps = (state) => ({
  column: state.filters.column,
  comparison: state.filters.comparison,
  value: state.filters.value,
})

FilterNumber.propTypes = {
  handleClick: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  changeComparison: PropTypes.func.isRequired,
  changeColumn: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);
