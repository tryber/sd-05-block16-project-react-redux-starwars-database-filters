import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Table from './components/Table';
import { filterName, filterValues } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comp: '',
      value: '',
      filter: true,
    };
  }

  render() {
    const { filterV } = this.props;
    const { column, comp, value } = this.state;
    const colunas = ['', 'population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    const comparacao = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <div> Procurar:
        <input
          data-testid="name-filter"
          onChange={(e) => this.props.f_Name(e.target.value)} type="text"
        /> <select
          data-testid="column-filter"
          onChange={(e) => {
            filterV(e.target.value, comp, value);
            this.setState({ column: e.target.value });
          }}
        > {colunas.map((item) => <option>{item}</option>)} </select>
        <select
          data-testid="comparison-filter"
          onChange={(e) => {
            filterV(column, e.target.value, value);
            this.setState({ comp: e.target.value });
          }}
        >{ comparacao.map((item) => <option>{item}</option>) }</select>
        <input
          type="number" data-testid="value-filter"
          onChange={(e) => {
            filterV(column, comp, e.target.value); this.setState({ value: e.target.value });
          }}
        /> <button data-testid="button-filter">Filtrar</button> <Table /> </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  f_Name: (name) => dispatch(filterName(name)),
  filterV: (name1, name2, name3) => dispatch(filterValues(name1, name2, name3)),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  f_Name: PropTypes.func.isRequired,
  filterV: PropTypes.func.isRequired,
};
