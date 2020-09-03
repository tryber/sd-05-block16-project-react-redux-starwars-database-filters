import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHeaderCell from './TableHeaderCell';

class TableReader extends Component {
  render() {
    const { isFetching, planetsColumns } = this.props;
    return (
      <thead className="table-header">
        <tr className="header-row">
          {!isFetching
            && planetsColumns.map((colName, index) => (
              <TableHeaderCell name={colName} key={`coll-${index.toString()}`} />
            ))}
        </tr>
      </thead>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  isFetching: data.isFetching,
  planets: data.planets,
  planetsColumns: data.planetsColumns,
});

export default connect(mapStateToProps)(TableReader);

TableReader.propTypes = {
  planetsColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
};
