import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByNumbers } from '../actions';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.ColumnFilter = this.ColumnFilter.bind(this);
    this.ComparisonFilter = this.ComparisonFilter.bind(this);
    this.ValueFilter = this.ValueFilter.bind(this);
  }

  ColumnFilter(event) {
    this.setState({ column: event.target.value });
  }

  ComparisonFilter(event) {
    this.setState({ comparison: event.target.value });
  }

  ValueFilter(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { filters } = this.props;
    return (
      <div>
        <select data-testid="column-filter" onChange={this.ColumnFilter}>
          <option value="column">column</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" onChange={this.ComparisonFilter} >
          <option value="comparison">comparison</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={this.ValueFilter}
        />
        <button data-testid="button-filter" onClick={() => filters(this.state)}>
          Filter
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  filters: filterByNumbers,
};

export default connect(null, mapDispatchToProps)(Select);

Select.propTypes = {
  filters: PropTypes.func.isRequired,
};
