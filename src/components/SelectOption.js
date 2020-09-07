import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterGeneral } from '../actions';

class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: 0,
      col: [
        '',
        'rotation_period',
        'orbital_period',
        'diameter',
        'surface_water',
        'population',
      ],
    };
    this.hC = this.hC.bind(this);
  }

  hC() {
    const { filter } = this.props;
    const { column, comparison, value } = this.state;
    if (column && comparison) {
      filter({ column, comparison, value });
      this.setState({ column: '', value: 0 });
    }
  }
  // prettier-ignore
  render() {
    const { col } = this.state;
    const { filtros } = this.props;
    const colunas = [...col];
    if (filtros.length > 0) {
      filtros.forEach((filt) => {colunas.splice(colunas.indexOf(filt.column), 1);});
    }
    return (
      <div>
        <select
          onChange={(event) => this.setState({ column: event.target.value })}
          data-testid="column-filter"
        >
          {colunas.map((value) => (<option value={value}>{value}</option>))}
        </select>
        <select
          onChange={(event) => this.setState({ comparison: event.target.value })}
          data-testid="comparison-filter"
        >
          <option value="" />
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter" type="number"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button data-testid="button-filter" onClick={this.hC}>CLIQUE AQUI</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filtros: state.filters.filterByNumericValues,
});

// Aprendi com o Felipe a forma de colocar o MapDispatch assim. Depois descobri que deu ruim
const mapDispatchToProps = (dispatch) => ({
  filter: (a) => dispatch(filterGeneral(a)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectOption);

SelectOption.propTypes = {
  filter: PropTypes.func.isRequired,
  filtros: PropTypes.arrayOf(PropTypes.object).isRequired,
};
