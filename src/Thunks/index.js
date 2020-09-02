import getPlanets from '../Services/API';
import { fetchPlanets } from '../Actions';

function planetsThunks() {
  return (dispatch) => {
    dispatch(fetchPlanets());
    return fetch(getPlanets)
      .then((response) => response.json);
  };
}

export default planetsThunks;
