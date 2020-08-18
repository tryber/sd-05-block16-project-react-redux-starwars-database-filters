// Solução com ajuda do repositório do Anderson Godoy.
// Estava alterando bastante o arquivo e perdendo muito tempo.

export default function queryFilters(data, textFilter, filters) {
  let planetsFiltered = data;
  if (filters.length < 1) {
    const text = planetsFiltered.filter((fil) =>
      fil.name.toLowerCase().includes(textFilter.toLowerCase()),
    );
    return text;
  }

  filters.forEach((filter) => {
    if (filter.comparison === 'maior que') {
      const greaterThan = planetsFiltered.filter((fil) =>
        fil.name.toLowerCase().includes(textFilter.toLowerCase()));
      planetsFiltered = greaterThan.filter(
        (fil) => Number(fil[filter.column]) > Number(filter.value),
      );
    } else if (filter.comparison === 'menor que') {
      const lessThan = planetsFiltered.filter((fil) =>
        fil.name.toLowerCase().includes(textFilter.toLowerCase()));
      planetsFiltered = lessThan.filter(
        (fil) => Number(fil[filter.column]) < Number(filter.value),
      );
    } else {
      const equalTo = planetsFiltered.filter((fil) =>
        fil.name.toLowerCase().includes(textFilter.toLowerCase()));
      planetsFiltered = equalTo.filter(
        (fil) => Number(fil[filter.column]) === Number(filter.value),
      );
    }
  });
  return planetsFiltered;
}
