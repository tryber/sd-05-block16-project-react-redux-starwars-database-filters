import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterRemover } from '../actions/filterRemover';

const FiltersDisplay = ({ filters, onClick }) => {
  const { column, comparison, value } = filters;
  return (
    <div data-testid="filter">
      {`${column}, ${comparison}, ${value}`}
      <button onClick={() => onClick(filters)} value={{ column, comparison, value }}>
        X
      </button>
    </div>
  );
};

FiltersDisplay.propTypes = {
  filters: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (filters) => (dispatch(filterRemover(filters))),
});

export default connect(null, mapDispatchToProps)(FiltersDisplay);
