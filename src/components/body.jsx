import React from 'react';
import { connect } from 'react-redux';
import propTypes, { instanceOf, number } from 'prop-types';
import Planeta from './planeta';
import numericFilters from './numericFilters';

const applyComparison = (planeta, filtro) => {
  const { column, comparison, value } = filtro;

  if (comparison === 'menor que') {
    // [column] generaliza, para nao ter que usar .population, .diameter, etc...
    return Number(planeta[column]) < value; // true ou false
  } else if (comparison === 'maior que') {
    // planeta -> objeto, pode ser dot notation -> obj.chave, ou obj[chave]
    return Number(planeta[column]) > value; // true ou false
  } else if (comparison === 'igual a') {
    return Number(planeta[column]) === Number(value); // true ou false
  }
};
// variável para conter valores numéricos
const TituloNumerico = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
  'population',
];

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.OrdemEProgresso = this.OrdemEProgresso.bind(this);
  }
  // função para ordenar, recebe um array de planetas
  OrdemEProgresso(planetas) {
    const { column, sort } = this.props.order;
    if (TituloNumerico.includes(this.props.order.column)) {
      if (sort === 'ASC') {
        return planetas.sort((a, b) => a[column.toLowerCase()] - b[column.toLowerCase()]);
      }
      return planetas.sort((a, b) => b[column.toLowerCase()] - a[column.toLowerCase()]);
    }
    if (sort === 'ASC') {
      return planetas.sort((a, b) => (a.name < b.name ? -1 : 1));
    }
    return planetas.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
  render() {
    const { planetas, filterByNumericValues, nome, isFetching } = this.props;
    let planets = planetas;

    planets = planets.filter(
      (planeta) => planeta.name.toLowerCase().indexOf(nome.toLowerCase()) >= 0
    );

    filterByNumericValues.forEach((filtro) => {
      planets = planets.filter((planeta) => applyComparison(planeta, filtro));
    });

    planets = this.OrdemEProgresso(planets);

    return (
      <tbody>
        {planets.map((planeta) => (
          <Planeta key={planeta.name} planeta={planeta} />
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planetas: state.reducerApi.data,
  nome: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
  options: state.filters.selectedOption,
  order: state.filters.order,
});

export default connect(mapStateToProps)(Body);

Body.propTypes = {
  planetas: propTypes.arrayOf(instanceOf(Object)).isRequired,
  nome: propTypes.string.isRequired,
};
