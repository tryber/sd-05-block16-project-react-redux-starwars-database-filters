import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFilter } from '../actions';

function Remove({ comparisonParams, deleteFilter }) {
  const onClick = (filtered) => deleteFilter(filtered);

  return comparisonParams.map((filtered) => (
    <div data-testid="filter" key={filtered.column}>
      <span>{`${filtered.column} - ${filtered.comparison} - ${filtered.value} `}</span>
      <button type="button" onClick={() => onClick(filtered)}>
        X
      </button>
    </div>
  ));
}

const mapStateToProps = (state) => ({
  comparisonParams: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFilter: (erased) => dispatch(removeFilter(erased)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Remove);

Remove.propTypes = {
  comparisonParams: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFilter: PropTypes.func.isRequired,
};
