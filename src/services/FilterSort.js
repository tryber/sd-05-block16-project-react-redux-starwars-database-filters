const stringOrder = [
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

const numberOrder = [
  'rotation_period',
  'orbital_period',
  'diameter',
  'surface_water',
];

function ASC(planets, order, sort) {
  let newArray;
  if (sort === 'ASC' && stringOrder.includes(order)) {
    newArray = planets.sort(function (a, b) {
      if (a[order] > b[order]) {
        return 1;
      }

      if (a[order] < b[order]) {
        return -1;
      }
      return 0;
    });
  }

  if (sort === 'ASC' && numberOrder.includes(order)) {
    newArray = planets.sort(function (a, b) {
      return a[order] - b[order];
    });
  }
  return newArray;
}

function DESC(planets, order, sort) {
  let newArray;
  if (sort === 'DESC' && stringOrder.includes(order)) {
    newArray = planets.sort(function (c, d) {
      if (c[order] > d[order]) {
        return 1;
      }

      if (c[order] < d[order]) {
        return -1;
      }
      return 0;
    })
    .reverse();
  }

  if (sort === 'DESC' && numberOrder.includes(order)) {
    newArray = planets.sort(function (c, d) {
      return c[order] - d[order];
    })
    .reverse();
  }
  return newArray;
}

export default function filterSort(planets, order, sort) {
  let finalArray;
  let column = order;
  if (column === 'Name') column = 'name';
  if (sort === 'ASC') {
    finalArray = ASC(planets, column, sort);
  }
  if (sort === 'DESC') {
    finalArray = DESC(planets, column, sort);
  }

  return finalArray;
}
