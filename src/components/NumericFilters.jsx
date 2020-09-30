import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import colunas from '../services/colunas';
import compare from '../services/compare';
import SelectButton from './SelectButton';
import { columnAdded, comparisonAdded, numberAdded } from '../actions/selectActions';
import { filter } from '../actions/dataAction';

const NumericFilters = ({ selectedColumn, column, comparison,
  selectedComparison, numberAddedAction, onClick, optionsToRemove }) => {
    /*
    a constante abaixo foi feita baseada num codigo do stack Overflow. Eis o link:
    https://stackoverflow.com/questions/34901593/how-to-filter-an-array-from-all-elements-of-another-array
    */
  const availableOptions = colunas.filter((coluna) => optionsToRemove.indexOf(coluna) < 0);
  return (
    <div>
      <SelectButton
        datatestid="column-filter"
        options={availableOptions}
        onChange={selectedColumn}
        optionSelected={column}
      />
      <SelectButton
        datatestid="comparison-filter"
        options={compare}
        onChange={selectedComparison}
        optionSelected={comparison}
      />
      <input type="number" onChange={numberAddedAction} data-testid="value-filter" />
      <button data-testid="button-filter" onClick={onClick} >Filtrar</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectedColumn: ({ target: { value } }) => dispatch(columnAdded(value)),
  onLoad: (value) => dispatch(columnAdded(value)),
  selectedComparison: ({ target: { value } }) => dispatch(comparisonAdded(value)),
  numberAddedAction: ({ target: { value } }) => dispatch(numberAdded(value)),
  onClick: () => (dispatch(filter())),
});

const mapStateToProps = (state) => ({
  column: state.filters.column,
  comparison: state.filters.comparison,
  optionsToRemove: state.filters.filterByNumericValues.map((filtro) => (filtro.column)),
});

NumericFilters.propTypes = {
  selectedColumn: PropTypes.func.isRequired,
  selectedComparison: PropTypes.func.isRequired,
  numberAddedAction: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  optionsToRemove: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NumericFilters);
