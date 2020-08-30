// caminho base https://swapi-trybe.herokuapp.com/api/
export function myApisCategorys(Categ = 'planets') {
  fetch(`https://swapi-trybe.herokuapp.com/api/${Categ}`)
  .then((e) => e.json())
  .then((res) => res.results);
}

export default myApisCategorys;
