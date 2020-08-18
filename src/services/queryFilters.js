import filterSort from './FilterSort';

export default function queryFilters(planet, textFilter, filters, order, sort) {
  let planetsFiltered = filterSort(planet, order, sort);
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
        (fil) => Number(fil[filter.column]) > Number(filter.value));
    } else if (filter.comparison === 'menor que') {
      const lessThan = planetsFiltered.filter((fil) =>
        fil.name.toLowerCase().includes(textFilter.toLowerCase()));
      planetsFiltered = lessThan.filter(
        (fil) => Number(fil[filter.column]) < Number(filter.value));
    } else {
      const equalTo = planetsFiltered.filter((fil) =>
        fil.name.toLowerCase().includes(textFilter.toLowerCase()));
      planetsFiltered = equalTo.filter(
        (fil) => Number(fil[filter.column]) === Number(filter.value));
    }
  });
  return planetsFiltered;
}
