import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setColumn } from '../../actions';

const ColumnFilter = ({ options, setFilter, filters }) => {
  let newOptions = options;
  filters.forEach((filter) => {
    newOptions = newOptions.filter((opt) => filter.column !== opt);
  });

  return (
    <select onChange={({ target }) => setFilter(target.value)} data-testid="column-filter">
      <option>Coluna</option>
      {newOptions.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const mapStateToProps = (state) => ({
  options: state.filters.columnFilters,
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = { setFilter: setColumn };

export default connect(mapStateToProps, mapDispatchToProps)(ColumnFilter);

ColumnFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilter: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
