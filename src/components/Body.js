// Transparência: Paulo Zambelli foi de grande ajuda nessa
// parte do projeto explicando todo o processo de Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AcionaApi } from '../actions';
import Planet from './Planet';

class Body extends Component {
  constructor(props) {
    super(props);
    this.filtrando = this.filtrando.bind(this);
    this.funcaoOrdenar = this.funcaoOrdenar.bind(this);
  }

  componentDidMount() {
    this.props.AcionaApi();
  }

  // Grande ajuda do Rodrigo para fazer essa parte.
  filtrando() {
    const { byNumeric, planets } = this.props;
    let finalPlanets = [...planets];
    if (byNumeric.length > 0) {
      byNumeric.forEach((filtro) => {
        const { column, comparison, value } = filtro;
        if (comparison === 'maior que') {
          finalPlanets = finalPlanets.filter(
            (planeta) => +planeta[column] > +value,
            // Esse sinal de mais força a transformação de uma string em número
          );
        } else if (comparison === 'menor que') {
          finalPlanets = finalPlanets.filter(
            (planeta) => +planeta[column] < +value,
          );
        } else {
          finalPlanets = finalPlanets.filter(
            (planeta) => +planeta[column] === +value,
          );
        }
      });
    }
    return finalPlanets;
  }

  funcaoOrdenar(planetas) {
    const { ordem, column } = this.props;
    const literal = [
      'name',
      'climate',
      'gravity',
      'terrain',
      'films',
      'created',
      'edited',
      'url',
    ];
    const Column = column.toLowerCase();
    if (literal.some((coluna) => coluna === Column)) {
      if (ordem === 'ASC') {
        return planetas.sort((a, b) => (b[Column] < a[Column] ? 1 : -1));
      }
      return planetas.sort((a, b) => (b[Column] > a[Column] ? 1 : -1));
    }
    if (ordem === 'ASC') {
      return planetas.sort((a, b) => (1 * a[Column]) - (1 * b[Column]));
    }
    return planetas.sort((a, b) => (1 * b[Column]) - (1 * a[Column]));
  }

  // ANCHOR render
  render() {
    const { filters } = this.props;
    let filterPlanets = this.filtrando();
    filterPlanets = filterPlanets.filter((planeta) =>
      planeta.name.includes(filters),
    );
    if (this.props.ordenar) {
      filterPlanets = this.funcaoOrdenar(filterPlanets);
    }
    return (
      <tbody>
        {filterPlanets.map((planeta) => (
          <Planet key={planeta.name} planeta={planeta} />
        ))}
      </tbody>
    );
  }
}

// ANCHOR mapToProps
const mapStateToProps = (state) => ({
  planets: state.planetsReducer.planets,
  filters: state.filters.filterByName.name,
  byNumeric: state.filters.filterByNumericValues,
  column: state.filters.order.column,
  ordem: state.filters.order.sort,
  ordenar: state.filters.ordenar,
});

const mapDispatchToProps = (dispatch) => ({
  AcionaApi: () => dispatch(AcionaApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);

// ANCHOR PropTypes
Body.propTypes = {
  AcionaApi: PropTypes.func.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.string.isRequired,
  byNumeric: PropTypes.arrayOf(PropTypes.object).isRequired,
};
