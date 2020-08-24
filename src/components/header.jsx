import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByName, filterByNumericValues, clearFilter } from '../actions';

const comparação = [
  ['COMPARAÇÃO'],
  ['maior que'],
  ['igual a'],
  ['menor que'],
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnFilter: [
        'COLUNAS',
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ],
      column: [],
      comparison: [],
      value: [],
    };
    this.trocarState = this.trocarState.bind(this);
  }

  // alterar valores no State.
  trocarState(event) {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  // comondos a executar ao aparter o botão do filtro.
  async clickDuplo() {
    await this.props.filterByNumericValues(this.state.column,
      this.state.comparison, this.state.value);
    this.colunasSelact();
  }

  // filtrar pela coluna.
  filterValues() {
    return (
      <div>
        <div>
          <select
            data-testid="column-filter" type="ComboBox"
            name="column" onChange={this.trocarState}
          >
            {(this.state.columnFilter.filter((parametro) => !this.props.filtersArray
              .includes(parametro))).map((value) => <option key={value}>{value}</option>)}
          </select>
          <select
            data-testid="comparison-filter" type="ComboBox"
            name="comparison" onChange={this.trocarState}
          >
            {comparação.map((value) => <option key={value}>{value}</option>)}
          </select>
        </div>
        <div>
          <input
            data-testid="value-filter" type="number" name="value"
            onChange={this.trocarState}
          />
        </div>
        <button
          data-testid="button-filter" onClick={() => (this.clickDuplo())}
        >Filtrar</button>
      </div>
    );
  }

  // remover o item selecionado da filtro.
  colunasSelact() {
    const { filters } = this.props;
    const colunas = ['COLUNAS', 'population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water',
    ];
    if (filters.length > 0) {
      filters.forEach((Select) => {
        colunas.splice(colunas.indexOf(Select.column), 1);
        this.setState({ columnFilter: colunas });
      });
    }
  }

  // excluir seleção.
  removeFilter() {
    const { filters } = this.props;
    if (filters.length > 0) {
      return (
        <div>
          <div>
            <p className="textHeder">Filtros</p>
          </div>
          <div >
            {filters.map((filtro) => (
              <div data-testid="filter" className="removeFilterItem" key={filtro.column}>
                <button className="buttonRemove" onClick={() => (this.clickRemove(filtro))}>
                  X
                </button>
                <div>
                  {filtro.column} {filtro.comparison} {filtro.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return ('');
  }

  clickRemove(filtro) {
    this.props.clearFilter(filtro.column);
    this.colunasSelact();
  }

  // header visual para o usuário.
  render() {
    return (
      <div className="header">
        <div className="prourarNome">
          <p className="textHeder">Procurar pelo nome:</p>
          <input
            data-testid="name-filter" type="text" name="name-filter"
            onChange={(event) => { this.props.filterByName(event.target.value); }}
          />
        </div>
        <div className="filtrarValorNumber">
          {this.filterValues()}
        </div>
        <div className="removeFilter">
          {this.removeFilter()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
  filtersArray: state.filters.filterByNumericValues.map((filtro) => (filtro.column)),
});

const mapDispatchToProps = (dispatch) => ({
  filterByName: (name) => dispatch(filterByName(name)),
  filterByNumericValues: (column, comparison, value) =>
    dispatch(filterByNumericValues(column, comparison, value)),
  clearFilter: (column) => dispatch(clearFilter(column)),
});

Header.propTypes = {
  filterByName: PropTypes.func.isRequired,
  filterByNumericValues: PropTypes.func.isRequired,
  filters: PropTypes.instanceOf(Object).isRequired,
  filtersArray: PropTypes.instanceOf(Object).isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
