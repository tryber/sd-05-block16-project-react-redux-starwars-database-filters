import React from 'react';
import PropTypes from 'prop-types';
import ColumnOptions from './ColumnOptions';

class ColumnSelect extends React.Component {
  render() {
    const { change } = this.props;
    return (
      <select
        className="sorter-container"
        data-testid="column-sort"
        name="column"
        onChange={change}
      >
        <option>Escolha</option>
        <ColumnOptions />
      </select>
    );
  }
}

export default ColumnSelect;

ColumnSelect.propTypes = {
  change: PropTypes.func.isRequired,
};
