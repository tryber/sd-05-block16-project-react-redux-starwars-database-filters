export const filterPlanetsByName = (planets, planetName) => planets
  .filter(({ name }) => name.toLowerCase().includes(planetName.toLowerCase()));

export const filterPlanetsNumeric = (planets = [], numericFilter) => planets.filter((planeta) => {
  const { comparison, value, column } = numericFilter;
  switch (comparison) {
    case 'maior que':
      return Number(planeta[column]) > Number(value);
    case 'menor que':
      return Number(planeta[column]) < Number(value);
    case 'igual a':
      return Number(planeta[column]) === Number(value);
    default:
      return planeta;
  }
});
