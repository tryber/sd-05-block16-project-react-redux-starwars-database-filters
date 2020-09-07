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

class Body extends React.Component {
  render() {
    const { planetas, filterByNumericValues, nome, isFetching } = this.props;
    let planets = planetas;

    planets = planets.filter(
      (planeta) => planeta.name.toLowerCase().indexOf(nome.toLowerCase()) >= 0
    );

    filterByNumericValues.forEach((filtro) => {
      planets = planets.filter((planeta) => applyComparison(planeta, filtro));
    });
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
});

export default connect(mapStateToProps)(Body);

Body.propTypes = {
  planetas: propTypes.arrayOf(instanceOf(Object)).isRequired,
  nome: propTypes.string.isRequired,
};
