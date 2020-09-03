const API = 'https://swapi-trybe.herokuapp.com/api/planets';

const fetchPlanetsAPI = () =>
  fetch(API).then((planets) =>
    planets
      .json()
      .then((planetsData) =>
        (planets.ok ? Promise.resolve(planetsData) : Promise.reject(planetsData)),
      ),
  );

export default fetchPlanetsAPI;
/* planets is the response fetched from the api and planetsData is that data in JSON form
   to be returned or not by the promise
*/
