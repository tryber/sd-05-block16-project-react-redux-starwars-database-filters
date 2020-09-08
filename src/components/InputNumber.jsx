import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { filterByNumber } from '../actions/actionFilter';

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

  // componentDidMount() {
  //   // procurar na array options se já existe a mesma string que existe no state (filterByNumericValues)
  //   this.props
  // }

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
    const { options } = this.props;
    let selectedOption = ['', 'population', 'rotation_period', 'diameter', 'surface_water', 'orbital_period'];
    selectedOption = selectedOption.filter((element ) => !options.includes(element)); 
    return (
      <div>
        <select data-testid="column-filter" onChange={(event) => (this.selectColumn(event))}>
          {selectedOption.map((element) => <option value={element} key={element}>{element}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
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
        <button data-testid="button-filter" onClick={this.handleClick}>
          Adicionar Filtro
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.filters.filterByNumericValues.map(element => element.column),
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumber: (column, comparison, value) =>
    dispatch(filterByNumber(column, comparison, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumber);

InputNumber.propTypes = {
  filterByNumber: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
};
