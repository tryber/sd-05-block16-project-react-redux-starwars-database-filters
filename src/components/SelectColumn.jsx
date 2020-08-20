import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByColumn } from '../reducers/createActions';

const options = ['Coluna', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

class SelectColumn extends Component {
  render() {
    const { selectColumn } = this.props;
    return (
      <div className="select_column-filter">
        <label htmlFor="select" />
        <select data-testid="column-filter" name="select" onChange={(e) => selectColumn(e)}>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>))}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectColumn: (e) => dispatch(filterByColumn(e)),
});

export default connect(null, mapDispatchToProps)(SelectColumn);
// export default SelectColumn;

SelectColumn.propTypes = {
  selectColumn: PropTypes.func.isRequired,
};
