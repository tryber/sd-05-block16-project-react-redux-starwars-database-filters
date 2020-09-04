import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Column from './Column';
import Comparison from './Comparison';
import Value from './Value';
import { filterNumber } from '../../actions';

function FilterNumber(props) {
  const { column, comparison, value } = props;

  return (
    <div>
      <Column />
      <Comparison />
      <Value />
      <button
        type="button" data-testid="button-filter"
        onClick={() => props.handleClick(column, comparison, value)}
      >
        Filtrar
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (a, b, c) => dispatch(filterNumber(a, b, c)),
});

const mapStateToProps = (state) => ({
  column: state.filters.column,
  comparison: state.filters.comparison,
  value: state.filters.value,
});

FilterNumber.propTypes = {
  handleClick: PropTypes.func.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterNumber);
