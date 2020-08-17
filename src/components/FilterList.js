import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { cancelFilterAction } from '../actions';

class FilterList extends React.Component {

  render() {
    const { filterNumber, cancelFilter } = this.props;
    return (
      <div className="filters-list">
        <h4> Current filters: </h4>
        {filterNumber.map((filter, i) => (
          <p data-testid="filter" key={filter.column}>
            <span>
              <button className="red-button" onClick={() => cancelFilter(i)}>
                X
              </button>
              {`${filter.column} ${filter.comparison} ${filter.value}`}
            </span>
          </p>
        ))}
      </div>
    );
  }
}
// [HA] - Modelo span https://www.w3schools.com/tags/tag_span.asp#:~:text=The%20tag%20is%20an,span%3E%20is%20an%20inline%20element .

const mapStateToProps = (state) => ({
  filterNumber: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  cancelFilter: (index) => dispatch(cancelFilterAction(index)),
});

FilterList.propTypes = {
  filterNumber: propTypes.arrayOf(propTypes.object).isRequired,
  cancelFilter: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
