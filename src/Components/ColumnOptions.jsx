import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ColumnOptions extends React.Component {
  render() {
    const { columns } = this.props;
    return columns.map((column, optIndex) => (
      <option value={column} key={optIndex.toString()}>
        {column}
      </option>
    ));
  }
}

const mapStateToProps = (state) => ({
  columns: state.data.planetsColumns,
});

export default connect(mapStateToProps)(ColumnOptions);

ColumnOptions.propTypes = { columns: PropTypes.arrayOf(PropTypes.string).isRequired };
