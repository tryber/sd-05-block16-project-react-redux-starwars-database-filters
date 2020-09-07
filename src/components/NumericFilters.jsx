import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import colunas from '../services/colunas';
import compare from '../services/compare';
import SelectButton from './SelectButton';
import { columnAdded, comparisonAdded, numberAdded } from '../actions/selectActions';
import { filter } from '../actions/dataAction';

const NumericFilters = (props) => (
  <div>
    <SelectButton
      datatestid="column-filter"
      options={colunas}
      onChange={props.selectedColumn}
      selected={props.column}
    />
    <SelectButton
      datatestid="comparison-filter"
      options={compare}
      onChange={props.selectedComparison}
      selected={props.comparison}
    />
    <input type="number" onChange={props.numberAddedAction} data-testid="value-filter" />
    <button data-testid="button-filter" onClick={props.onClick} >Filtrar</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  selectedColumn: ({ target: { value } }) => dispatch(columnAdded(value)),
  selectedComparison: ({ target: { value } }) => dispatch(comparisonAdded(value)),
  numberAddedAction: ({ target: { value } }) => dispatch(numberAdded(value)),
  onClick: () => (dispatch(filter())),
});

const mapStateToProps = (state) => ({
  column: state.filters.column,
  comparison: state.filters.comparison,
});

NumericFilters.propTypes = {
  selectedColumn: PropTypes.func.isRequired,
  selectedComparison: PropTypes.func.isRequired,
  numberAddedAction: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NumericFilters);
