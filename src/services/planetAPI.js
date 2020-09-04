const api = 'https://swapi.dev/api/planets/';

const requestPlanets = () =>
  fetch(api).then((response) =>
    response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)),
      ),
  );

export default requestPlanets;
