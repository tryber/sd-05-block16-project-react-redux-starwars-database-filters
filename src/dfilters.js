export default function datafilterfunction(filteredPlanets, filterByNumericValues) {
  // const { numericFilters } = this.props;
  let planets = filteredPlanets;
  for (let i = 0; i < filterByNumericValues.length; i += 1) {
    if (filterByNumericValues[i].comparison === 'maior que') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) > Number(filterByNumericValues[i].value));
    } else if (filterByNumericValues[i].comparison === 'menor que') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) < Number(filterByNumericValues[i].value));
    } else if (filterByNumericValues[i].comparison === 'igual a') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) === Number(filterByNumericValues[i].value));
    }
  }
  return planets;
}

// aula do colega Pedro Calado para fechar a lógica e colocar o "Number" para funcionar
