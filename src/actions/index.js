import { requestPlanets } from '../services/planetAPI';
export const RP_SUCESS = 'SUCESS';
export const RP_FAILED = 'FAILED';
export const REQUEST_PLANETS = 'REQUEST_PLANETS';

const rqPlanets = () => ({
  type: REQUEST_PLANETS,
})

const rpSucess = (data) => ({
  type: RP_SUCESS,
  data,
})

const rpFailed = (error) => ({
  type: RP_FAILED,
  error,
})

export function fetchPlanets() {
  return (dispatch) => {
    dispatch(rqPlanets());
  return requestPlanets()
    .then((data) => dispatch(rpSucess(data)),
    (error) => dispatch(rpFailed((error.message))),
    )
  }
}
