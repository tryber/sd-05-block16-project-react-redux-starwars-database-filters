import fetchPlanetsAPI from '../services/API';

export const FETCHING_PLANETS = 'FETCHING_PLANETS';
export const FETCHED_PLANETS = 'FETCHED_PLANETS';
export const FAILED_TO_FETCH = 'FAILED_TO_FETCH';
// exportando para serem executados pelos reducers que "executam" as actions.

const fetchingPlanets = () => ({ type: FETCHING_PLANETS });

const fetched = (planetsData) => ({ type: FETCHED_PLANETS, planetsData });

const failed = (error) => ({ type: FAILED_TO_FETCH, error });

/* Fetched e Failed possuem dados além do type pois fazem parte da Promise.
planetsData e error no caso são as respostas de successo ou falha na chamada da API. */

export const fetchPlanets = () => (dispatch) => {
  dispatch(fetchingPlanets());
  return fetchPlanetsAPI().then(
    (planetsData) => dispatch(fetched(planetsData.results)),
    (error) => dispatch(failed(error))
  );
};

/* thunk plantão Inácio: Function that calls a function. Since reducers are supposed to be “pure” 
(as in, they don’t change anything outside their scope) we can’t do any API calls or 
dispatch actions from inside a reducer. Thunk is just basically a function that 
turns actions into functions(?) */
