import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class FilterList extends React.Component {
  render() {
    const { filterNumber } = this.props;
    return (
      <div className="filters-list">
        <h4> Current filters: </h4>
        {filterNumber.map((filter) =>
          <p key={filter.column}>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </p>,
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterNumber: state.filters.filterByNumericValues,
});

FilterList.propTypes = {
  filterNumber: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps)(FilterList);
