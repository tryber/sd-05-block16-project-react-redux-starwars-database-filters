import React from 'react';
import { connect } from 'react-redux';

import { onChangeColumn, onChangeComparison, onChangeValue, filterNumber } from '../../actions';

function FilterNumber(props) {
  const { column, comparison, value } = props;

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={(e) => props.changeColumn(e.target.value)}
      >
        <option>Coluna</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(e) => props.changeComparison(e.target.value)}
      >
        <option>[]</option>
        <option>maior que</option>
        <option>igual a</option>
        <option>menor que</option>
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
  handleClick: (a,b,c) => dispatch(filterNumber(a,b,c)),
});

const mapStateToProps = (state) => ({
  column: state.filters.column,
  comparison: state.filters.comparison,
  value: state.filters.value,
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);
