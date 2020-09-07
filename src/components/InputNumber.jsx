import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterByNumber } from '../actions/actionFilter';
// import { fetchPlanets } from '../actions/actionApi';

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.selectColumn = this.selectColumn.bind(this);
    this.selectComparison = this.selectComparison.bind(this);
    this.selectValue = this.selectValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  selectColumn(e) {
    this.setState({ column: e.target.value });
  }

  selectComparison(e) {
    this.setState({ comparison: e.target.value });
  }

  selectValue(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    const { column, comparison, value } = this.state;
    this.props.filterByNumber(column, comparison, value);
  }

  render() {
    const options = ['', 'population', 'surface_water', 'diameter', 'orbital_period', 'rotation_period'];
    return (
      <div>
        <select data-testid="column-filter" onChange={(event) => (this.selectColumn(event))}>
          {options.map((element) => <option value={element} key={element}>{element}</option>)}
        </select>
        <select
          data-testid="comparasion-filter"
          onChange={(event) => (this.selectComparison(event))}
        >
          <option value="" disabled selected>Compare</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(event) => (this.selectValue(event))}
        />
        <button data-testis="button-filter" onClick={this.handleClick}>
          Adicionar Filtro
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterByNumber: (column, comparison, value) =>
    dispatch(filterByNumber(column, comparison, value)),
});

export default connect(null, mapDispatchToProps)(InputNumber);

InputNumber.propTypes = {
  filterByNumber: propTypes.func.isRequired,
};
