import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onChangeColumn } from '../../actions';

function Column(props) {
  const { columnOption } = props;

  return (
    <select
      data-testid="column-filter"
      onChange={(e) => props.changeColumn(e.target.value)}
    >
      {columnOption.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeColumn(filter) {
    const action = onChangeColumn(filter);
    dispatch(action);
  },
});

const mapStateToProps = (state) => ({
  columnOption: state.filters.columnOption,
});

Column.propTypes = {
  changeColumn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);
