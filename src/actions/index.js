// export const SW_PLANETS = 'SW_PLANETS';

// export const startingPlanets = () =>(
//   {
//     type: SW_PLANETS,
//     name: 'Teste',
//     rotationP: 0,
//     diameter:0,
//     climate: 'cold',
//     gravite: 0,
//     surfaceWater: 0,
//     population: 30,
//   }
// )
import getPlanets from '../services/data';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const REQUEST_PLANETS_SUCCESS = 'REQUEST_PLANETS_SUCESS';
export const REQUEST_PLANETS_FAILURE = 'REQUEST_PLANETS_FAILURE';

const requestPlanets = () => ({
  type: REQUEST_PLANETS,
});

const requestPlanetsSuccess = (results) => ({
  type: REQUEST_PLANETS_SUCCESS,
  data: results,
});

const requestPlanetsFailure = (error) => ({
  type: REQUEST_PLANETS_FAILURE,
  error,
});

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(requestPlanets());

    return getPlanets()
      .then(
        (results) => dispatch(requestPlanetsSuccess(results)),
        (error) => dispatch(requestPlanetsFailure(error.message)),
      );
  };
}
