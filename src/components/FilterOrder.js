/* eslint-disable react/jsx-fragments */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { filterByOrder } from '../actions';

const col = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

class FilterOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      sort: event.target.value,
    });
  }

  render() {
    const { dispatchFilter } = this.props;
    return (
      <Fragment>
        <select data-testid="column-sort"
          onChange={(e) => this.setState({
            column: e.target.value,
          })}
        >
          {col.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <label>ASC</label>
        <input name="filter" value="ASC" type="radio" data-testid="column-sort-input" onChange={this.handleChange} />
        <label>DESC</label>
        <input name="filter" value="DESC" type="radio" data-testid="column-sort-input" onChange={this.handleChange} />
        <button type="button" data-testid="column-sort-button" onClick={() => dispatchFilter(this.state)}>Filtrar</button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = { dispatchFilter: filterByOrder };


export default connect(null, mapDispatchToProps)(FilterOrder);
