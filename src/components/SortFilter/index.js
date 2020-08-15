import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sortFilter } from '../../actions';
import Input from './Input';

import './style.css';

class SortFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
  }

  render() {
    const { options, sorting } = this.props;
    const { column, sort } = this.state;
    return (
      <div>
        <select
          data-testid="column-sort"
          onChange={({ target }) => this.setState({ column: target.value })}
        >
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="ASC">ASC</label>
        <Input onClick={({ target }) => this.setState({ sort: target.value })}>ASC</Input>
        <label htmlFor="DESC">DESC</label>
        <Input onClick={({ target }) => this.setState({ sort: target.value })}>DESC</Input>
        <button
          data-testid="column-sort-button"
          onClick={() => sorting(column, sort)}
          type="button"
        >
          Sort
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  options: state.filters.columnFilters,
});

const mapsDispatchToProps = { sorting: sortFilter };

export default connect(mapStateToProps, mapsDispatchToProps)(SortFilter);

SortFilter.propTypes = {
  sorting: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
