import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFilterAction } from '../actions/index';

class DeleteFilter extends React.Component {
  render() {
    const { filterByNumericValues, deleteFilter } = this.props;
    return (
      <div>
        <h3>Filtros selecionados</h3>
        {filterByNumericValues.map((filter, item) => (
          <p data-testid="filter" key={filterByNumericValues.column}>
            <div>
              <button type="button" onClick={() => deleteFilter(item)}>
                X
              </button>
              {`${filter.column} ${filter.comparison} ${filter.value}`}
            </div>
          </p>
        ))}
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
  item: state.filters.item,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFilter: (element) => dispatch(deleteFilterAction(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFilter);

DeleteFilter.propTypes = {
  filterByNumericValues: propTypes.arrayOf(propTypes.object).isRequired,
  deleteFilter: propTypes.func.isRequired,
};
