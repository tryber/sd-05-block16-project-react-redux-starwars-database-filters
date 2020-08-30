import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterName, filterValues } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };
  }

  render() {
    const { filterV, f_Name } = this.props;
    const { column, comparison, value } = this.state;
    const colunas = ['', 'population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    const comparacao = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <div>
        Procurar:
        <input
          data-testid="name-filter"
          onChange={(e) => f_Name(e.target.value)} type="text"
        /> <select
          data-testid="column-filter" onChange={(e) => {this.setState({ column: e.target.value });
        }}
        > {colunas.map((i) => <option>{i}</option>)} </select>
        <select
          onChange={(e) => {this.setState({ comparison: e.target.value });
          }} data-testid="comparison-filter"
        >{ comparacao.map((j) => <option>{j}</option>)}</select>
        <input
          type="number" data-testid="value-filter" onChange={(e) => {this.setState({ value: e.target.value });
          }}
        /> <button onClick={() => filterV(column, comparison, value)} data-testid="button-filter">Filtrar</button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  f_Name: (name) => dispatch(filterName(name)),
  filterV: (name1, name2, name3) => dispatch(filterValues(name1, name2, name3)),
});

export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  f_Name: PropTypes.func.isRequired,
  filterV: PropTypes.func.isRequired,
};