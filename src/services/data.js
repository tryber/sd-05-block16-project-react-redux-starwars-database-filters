const getPlanets = () => (
  fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => (
      response
      .json()
      .then((json) => (response.ok ? Promise.resolve
        (json) : Promise.reject(json)))
    ))  
);
// console.log(getPlanets());
export default getPlanets;
