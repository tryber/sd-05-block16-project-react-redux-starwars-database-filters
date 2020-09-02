import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterValues } from '../actions';


class NumericFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
    this.valueChange = this.valueChange.bind(this);
    this.hClick = this.hClick.bind(this);
    this.compChange = this.compChange.bind(this);
    this.colChange = this.colChange.bind(this);
  }

  colChange(event) {
    this.setState({ column: event.target.value });
  }

  compChange(event) {
    this.setState({ comparison: event.target.value });
  }

  valueChange(event) {
    this.setState({ value: event.target.value });
  }

  hClick() {
    const { filterNValues } = this.props;
    filterNValues(this.state);
  }

  // Toda a lógica de filtrar as opções de acordo com o estado das colunas no store foi
  // consultada no repositório da Juliette
  render() {
    const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const options2 = ['menor que', 'maior que', 'igual a'];
    const { filterOption } = this.props;
    // eslint-disable-next-line react/prop-types
    const columns = filterOption.map((filter) => filter.column);
    const filterColumns = options.filter((option) => !columns.includes(option));
    return (
      <div>
        <select data-testid="column-filter" placeholder="Selecione" onChange={this.colChange}>
          <option value="" defaultValue>Selecione</option>
          {filterColumns.map((opcao) => (<option>{opcao}</option>))}
        </select>
        <select data-testid="comparison-filter" onChange={this.compChange}>
          <option value="" defaultValue>Selecione</option>
          {options2.map((opcao) => (<option>{opcao}</option>))}
        </select>
        <input data-testid="value-filter" type="number" onChange={this.valueChange} />
        <button type="button" data-testid="button-filter" onClick={this.hClick}>Filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterOption: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterNValues: (estado) => dispatch(filterValues(estado)),
});


export default connect(mapStateToProps, mapDispatchToProps)(NumericFilters);

NumericFilters.propTypes = {
  filterOption: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterNValues: PropTypes.func.isRequired,
};
