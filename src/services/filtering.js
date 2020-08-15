import ordering from './ordering';

export default function filtering(planets, NF, filters, columnOrder, nameOrder) {
  let finalArr = ordering(planets, columnOrder, nameOrder);
  if (filters.length < 1) {
    const textFilter = finalArr.filter((data) =>
      data.name.toLowerCase().includes(NF.toLowerCase()));
    return textFilter;
  }
  filters.forEach((filter) => {
    if (filter.comparison === 'maior que') {
      const biggerThan = finalArr.filter((data) =>
        data.name.toLowerCase().includes(NF.toLowerCase()));
      finalArr = biggerThan.filter(
        (data) => Number(data[filter.column]) > Number(filter.value));
    } else if (filter.comparison === 'menor que') {
      const lowerThan = finalArr.filter((data) =>
        data.name.toLowerCase().includes(NF.toLowerCase()));
      finalArr = lowerThan.filter(
        (data) => Number(data[filter.column]) < Number(filter.value));
    } else {
      const equalTo = finalArr.filter((data) =>
        data.name.toLowerCase().includes(NF.toLowerCase()));
      finalArr = equalTo.filter(
        (data) => Number(data[filter.column]) === Number(filter.value),
      );
    }
  });
  return finalArr;
}
