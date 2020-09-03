import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFilter } from '../actions';

class FiltersList extends React.Component {
  render() {
    const { filters, rmvFilter } = this.props;
    return (
      <div>
        <h3>Filtros:</h3>
        {filters.map((filter) => (
          <div key={filter.column} data-testid="filter">
            {filter.column}
            &nbsp;
            {filter.comparison}
            &nbsp;
            {filter.value}
            &nbsp;
            <button type="button" onClick={() => rmvFilter(filter.column)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  rmvFilter: (column) => dispatch(removeFilter(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);

FiltersList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  rmvFilter: PropTypes.func.isRequired,
};
