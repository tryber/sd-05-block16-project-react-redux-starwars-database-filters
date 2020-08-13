// const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
const PLANETS_API = 'https://swapi.dev/api/planets/';

const getPlanets = () => (
  fetch(PLANETS_API)
    .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
);

export default getPlanets;

// const API = 'https://swapi.dev/api/planets/';

// const getPlanetsAPI = () => (
//   fetch(API)
//     .then((response) => response.json()
//     .then(data => response.ok ? Promise.resolve(data) : Promise.reject(data)))
// )

// export default getPlanetsAPI;
