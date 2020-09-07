import React from 'react';
import { connect } from 'react-redux';
import { colunas } from '../services/colunas';
import { compare } from '../services/compare';
import SelectButton from './SelectButton';
import { columnAdded, comparisonAdded, numberAdded } from '../actions/selectActions';
import { filter } from '../actions/dataAction'
const NumericFilters = ({ selectedColumn, selectedComparison,
  column, comparison, numberAdded, onClick }) => {
  return (
    <div>
      <SelectButton
        datatestid='column-filter'
        options={colunas}
        onChange={selectedColumn}
        selected={column}
      />
      <SelectButton
        datatestid='comparison-filter'
        options={compare}
        onChange={selectedComparison}
        selected={comparison}
      />
      <input type='number' onChange={numberAdded} data-testid='value-filter' />
      <button data-testid='button-filter' onClick={onClick} >Filtrar</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  selectedColumn: ({ target: { value } }) => dispatch(columnAdded(value)),
  selectedComparison: ({ target: { value } }) => dispatch(comparisonAdded(value)),
  numberAdded: ({ target: { value } }) => dispatch(numberAdded(value)),
  onClick: () => (dispatch(filter())),
});

const mapStateToProps = (state) => ({
  column: state.filters.column,
  comparison: state.filters.comparison,
})

export default connect(mapStateToProps, mapDispatchToProps)(NumericFilters);
