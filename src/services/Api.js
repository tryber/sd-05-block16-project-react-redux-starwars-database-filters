const SWAPI = 'https://swapi-trybe.herokuapp.com/api/planets';

const Api = () =>
  fetch(SWAPI).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );

export default Api;
