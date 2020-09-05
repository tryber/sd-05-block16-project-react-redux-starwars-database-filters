import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterNumber, handleColumn } from '../../actions';

function ButtonFilter(props) {
  const { column, comparison, value } = props;

  function MyFunctions() {
    props.handleClick(column, comparison, value);
    props.handleColumn(column);
  }

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={() => MyFunctions()}
    >
      Filtrar
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (a, b, c) => dispatch(filterNumber(a, b, c)),
  handleColumn: (column) => dispatch(handleColumn(column)),
});

const mapStateToProps = (state) => ({
  column: state.filters.column,
  comparison: state.filters.comparison,
  value: state.filters.value,
});

ButtonFilter.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleColumn: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonFilter);
