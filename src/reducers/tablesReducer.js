// import actions from '../actions/index';
import { myApisCategorys } from '../APIs/apis';

const initState = {
  default: () => myApisCategorys(),
};

function reducerFilter(state = initState, actions) {
  switch (actions) {
    default:
      return state;

  }
}
export default reducerFilter;
