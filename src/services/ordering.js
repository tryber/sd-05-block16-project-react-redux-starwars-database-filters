const stringColumns = [
  'name',
  'climate',
  'gravity',
  'terrain',
  'films',
  'url',
  'created',
  'edited',
  'population',
];
const numberColumns = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
];

/** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */

export default function ordering(planets, columnOrder, nameOrder) {
  let arrFinal;
  if (nameOrder === 'ASC') {
    arrFinal = ASC(planets, columnOrder, nameOrder);
  }
  if (nameOrder === 'DESC') {
    arrFinal = DESC(planets, columnOrder, nameOrder);
  }
  return arrFinal;
}

function ASC(planets, columnOrder, nameOrder) {
  let arr;
  if (nameOrder === 'ASC' && stringColumns.includes(columnOrder)) {
    arr = planets.sort(function (a, b) {
      if (a[columnOrder] > b[columnOrder]) {
        return 1;
      }
      if (a[columnOrder] < b[columnOrder]) {
        return -1;
      }
      return 0;
    });
  }
  if (nameOrder === 'ASC' && numberColumns.includes(columnOrder)) {
    arr = planets.sort(function (a, b) {
      return a[columnOrder] - b[columnOrder];
    });
  }
  return arr;
}

function DESC(planets, columnOrder, nameOrder) {
  let arr;
  if (nameOrder === 'DESC' && stringColumns.includes(columnOrder)) {
    arr = planets
      .sort(function (a, b) {
        if (a[columnOrder] > b[columnOrder]) {
          return 1;
        }
        if (a[columnOrder] < b[columnOrder]) {
          return -1;
        }
        return 0;
      })
      .reverse();
  }
  if (nameOrder === 'DESC' && numberColumns.includes(columnOrder)) {
    arr = planets.sort(function (a, b) {
      return b[columnOrder] - a[columnOrder];
    });
  }
  return arr;
}
