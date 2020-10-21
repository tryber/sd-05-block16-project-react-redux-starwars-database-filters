const api = 'https://swapi.dev/api/planets/';

const requestPlanets = () =>
  fetch(api)
  .then((resp) => resp.json()
  .then((json) => (resp.ok ? Promise.resolve(json) : Promise.reject(json)),
      ),
  );

export default requestPlanets;
