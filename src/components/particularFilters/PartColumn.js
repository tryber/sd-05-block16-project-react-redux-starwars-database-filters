import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { partColumn } from '../../actions/index';

const PartColumn = ({ partFilter, filters }) => {
  const coluna = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  if (filters.length > 0) {
    filters.forEach((each) => {
      coluna.splice(coluna.indexOf(each.column), 1);
    })
  }
  return (
    <select onChange={({ target }) => partFilter(target.value)} data-testid="column-filter">
      <option>Column</option>
      {coluna.map((choosen) => (
        <option value={choosen} key={choosen}>
          {choosen}
        </option>
      ))}
    </select>
  );
};

const mapStateToProps = (state) => ({
  options: state.filters.columnFilters,
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({ partFilter: (a) => dispatch(partColumn(a)) });

export default connect(mapStateToProps, mapDispatchToProps)(PartColumn);

PartColumn.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  partFilter: PropTypes.func.isRequired,
  choosen: PropTypes.arrayOf(PropTypes.string).isRequired,
};
