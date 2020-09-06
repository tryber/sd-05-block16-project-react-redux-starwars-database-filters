import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onChangeComparison } from '../../actions';

function Column(props) {
  const optionComparison = [[], 'maior que', 'igual a', 'menor que'];

  return (
    <select
      data-testid="comparison-filter"
      onChange={(e) => props.changeComparison(e.target.value)}
    >
      {optionComparison.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeComparison(filter) {
    const action = onChangeComparison(filter);
    dispatch(action);
  },
});

Column.propTypes = {
  changeComparison: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Column);
