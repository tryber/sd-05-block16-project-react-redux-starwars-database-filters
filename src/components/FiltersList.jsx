import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFiltersFromList } from '../actions';

class FiltersList extends React.Component {
  HandleClick(event) {
    const { remove, filters } = this.props;
    const filterCopy = [...filters];
    const removedArray = filters.map((filterList) => filterList.column);
    filterCopy.splice(removedArray.indexOf(event.target.id), 1);
    remove(filterCopy);
  }

  render() {
    const { filters } = this.props;
    return (
      <div>
        {filters.map((filterList) => (
          <div key={filterList.column} data-testid="filter">
            {`${filterList.column} ${filterList.comparison} ${filterList.value}`}
            <button onClick={(event) => this.HandleClick(event)}>X</button>
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
  remove: (list) => dispatch(removeFiltersFromList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);

FiltersList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};
// Transparência: Feito com Sid
