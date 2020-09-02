import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHeaderCell from './TableHeaderCell';
import { getStarWarsPlanets } from '../Actions';

class TableReader extends Component {
  componentDidMount() {
    const { gettingPlanets } = this.props;
    gettingPlanets();
  }

  render() {
    const { isFetching, planetsColumns } = this.props;
    return (
      <thead className="table-header">
        <tr className="header-row">
          {!isFetching
            && planetsColumns.map((colName, index) => (
              <TableHeaderCell name={colName} index={index} key={`coll-${index.toString}`} />
            ))}
        </tr>
      </thead>
    );
  }
}

const mapStateToProps = ({ planetsReducer }) => ({
  isFetching: planetsReducer.isFetching,
  planets: planetsReducer.planets,
  planetsColumns: planetsReducer.planetsColumns,
});

const mapDispatchToProps = (dispatch) => ({
  gettingPlanets: () => dispatch(getStarWarsPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableReader);

TableReader.propTypes = {
  planetsColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
};
