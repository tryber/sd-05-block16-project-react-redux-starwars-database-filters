import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFilter } from '../actions/index';

function Filterlist({ filtersRedux, dispatchRemoveFilter }) {
  return (
    <Fragment>
      {filtersRedux.map((e) => (
        <div data-testid="filter">
          <button type="button" onClick={() => dispatchRemoveFilter(e.column)}>X</button>
          <p>
            {e.column}
            {e.comparison}
            {e.value}
          </p>
        </div>
      ))}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  filtersRedux: state.filters.filterByNumericValues,
});

const MapDispatchToprops = (dispatch) => ({
  dispatchRemoveFilter: (column) => dispatch(removeFilter(column)),
});

Filterlist.propTypes = {
  filtersRedux: propTypes.arrayOf({
    column: propTypes.string.isRequired,
    comparison: propTypes.string.isRequired,
    values: propTypes.number.isRequired,
  }).isRequired,
  dispatchRemoveFilter: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, MapDispatchToprops)(Filterlist);
