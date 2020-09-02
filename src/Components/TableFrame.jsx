import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class TableFrame extends Component {
  render() {
    const { planets } = this.props;
    return (
      <tbody className="table-body">
        {planets.map((rowItems, rowId) => (
          <TableRow rowItems={rowItems} rowId={rowId} />
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = ({ planetsReducer }) => ({
  planets: planetsReducer.planets,
});

export default connect(mapStateToProps)(TableFrame);

TableFrame.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
