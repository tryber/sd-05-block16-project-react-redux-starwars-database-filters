export const filterPlanetsByName = (planets, planetName) => planets
  .filter(({ name }) => name.toLowerCase()
    .includes(planetName.toLowerCase()));

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

function sortByText(planets, sortParam) {
  const { sort, column } = sortParam;
  switch (sort) {
    case 'DESC':
      return planets.sort((a, b) => b[column].localeCompare(a[column]));
    case 'ASC':
      return planets.sort((a, b) => a[column].localeCompare(b[column]));
    default:
      return planets;
  }
}

function sortByNumber(planets, sortParam) {
  const newPlanets = planets;
  const { sort, column } = sortParam;
  switch (sort) {
    case 'DESC':
      return newPlanets.sort((a, b) => Number(b[column]) - Number(a[column]));
    case 'ASC':
      return newPlanets.sort((a, b) => Number(a[column]) - Number(b[column]));
    default:
      return newPlanets;
  }
}

export function sortColumn(planets, sortParam) {
  const { column, sort } = sortParam;
  const newSortParam = { column: column.toLowerCase(), sort };
  const testPlanet = { ...planets.find(Boolean) }[column];
  if (Number(testPlanet)) return sortByNumber(planets, newSortParam);
  return sortByText(planets, newSortParam);
}
