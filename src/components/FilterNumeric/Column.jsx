import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onChangeColumn } from '../../actions';

function Column(props) {
  const optionColumn = [
    'Coluna',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <select
      data-testid="column-filter"
      onChange={(e) => props.changeColumn(e.target.value)}
    >
      {optionColumn.map((opt) => (
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

Column.propTypes = {
  changeColumn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Column);
