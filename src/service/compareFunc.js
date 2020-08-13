const compareFunc = (planets, name, comparisonParams) => (
  comparisonParams.length === 0
    ? planets.filter((planet) => planet.name.includes(name))
    : comparisonParams.reduce(
      (acc, { column, comparison, value }) => acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return (
              planet.name.includes(name) && Number(planet[column]) > Number(value)
            );
          case 'menor que':
            return (
              planet.name.includes(name) && Number(planet[column]) < Number(value)
            );
          case 'igual a':
            return (
              planet.name.includes(name) && Number(planet[column]) === Number(value)
            );
          default:
            return planet.name.includes(name);
        }
      }),
      planets,
    )
);

export default compareFunc;
