import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onChangeValue } from '../../actions';

function Column(props) {
  return (
    <label htmlFor="value">
      <input
        className="input-value"
        data-testid="value-filter"
        type="number"
        onChange={(e) => props.changeValue(e.target.value)}
      />
    </label>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeValue(filter) {
    const action = onChangeValue(filter);
    dispatch(action);
  },
});

Column.propTypes = {
  changeValue: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Column);
