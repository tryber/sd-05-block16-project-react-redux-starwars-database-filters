import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { numericFilter } from '../actions';

let options = [
  'selecione',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.changeState = this.changeState.bind(this);
    this.changeFilters = this.changeFilters.bind(this);
  }

  changeState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  changeFilters() {
    const { column, comparison, value } = this.state;
    const { filteredNumbers } = this.props;
    if (column === 'selecione' || comparison === 'selecione' || value === '') {
      alert('Todos os campos são Obrigatórios');
    } else {
      filteredNumbers({ column, comparison, value });
    }
  }

  render() {
    const { filtros } = this.props;
    filtros.forEach((filtro) => {
      options = options.filter((option) => option !== filtro.column);
    });
    return (
      <div>
        <select data-testid="column-filter" name="column" onChange={this.changeState}>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <select data-testid="comparison-filter" name="comparison" onChange={this.changeState}>
          <option value="selecione">selecione</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" data-testid="value-filter" name="value" onChange={this.changeState} />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => this.changeFilters()}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filtros: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filteredNumbers: (event) => dispatch(numericFilter(event)),
});

Select.propTypes = {
  filteredNumbers: PropTypes.func.isRequired,
  filtros: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
