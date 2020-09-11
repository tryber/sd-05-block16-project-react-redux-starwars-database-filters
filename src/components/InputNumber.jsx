import React from 'react';
import { connect } from 'react-redux';
import propTypes, { instanceOf } from 'prop-types';
import { filterByNumber, removeClick } from '../actions/actionFilter';
import FiltroOrdenado from './FiltroOrdenado';

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
    this.seletores = this.seletores.bind(this);
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

  seletores(selectedOption) {
    return (
      <div>
        <select data-testid="column-filter" onChange={(event) => this.selectColumn(event)}>
          {selectedOption.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
        </select>
        <select data-testid="comparison-filter" onChange={(event) => this.selectComparison(event)}>
          <option value="" disabled selected>
            Compare
          </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={(event) => this.selectValue(event)}
        />
      </div>
    );
  }

  render() {
    const { options, filterByNumericValues } = this.props;
    let selectedOption = [
      '',
      'population',
      'rotation_period',
      'diameter',
      'surface_water',
      'orbital_period',
    ];
    selectedOption = selectedOption.filter((element) => !options.includes(element));
    return (
      <div>
        {this.seletores(selectedOption)}
        <button data-testid="button-filter" onClick={this.handleClick}>
          Adicionar Filtro
        </button>

        <FiltroOrdenado />
        
        {filterByNumericValues.map((filtro) => (
          <div data-testid="filter">
            <button onClick={this.props.removeClick} id={filtro.column}>
              X
            </button>
            {filtro.column}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  options: state.filters.filterByNumericValues.map((element) => element.column),
  filterByNumericValues: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumber: (column, comparison, value) =>
    dispatch(filterByNumber(column, comparison, value)),
  removeClick: (column) => dispatch(removeClick(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNumber);

InputNumber.propTypes = {
  filterByNumber: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  removeClick: propTypes.func.isRequired,
  filterByNumericValues: propTypes.arrayOf(instanceOf(Object)).isRequired,
};
