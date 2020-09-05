import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onChangeColumn } from '../../actions';

function Column(props) {
  const { columnOption, filterByNumericValues } = props;
  let columnOptionFiltered = columnOption;
  let newArray = [];
  let novoFilter = [];
  filterByNumericValues.map(a => novoFilter.push(a.column));

  if (novoFilter.length > 0) {
    newArray = columnOptionFiltered.filter(function(element) {
      return novoFilter.indexOf(element) === -1;
    });
  } else {
    newArray = columnOption;
  }

  return (
    <select
      data-testid="column-filter"
      onChange={(e) => props.changeColumn(e.target.value)}
    >
      {newArray.map((opt) => (
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
  filterByNumericValues: state.filters.filterByNumericValues,
});

Column.propTypes = {
  changeColumn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Column);
