const { REQUEST_API, GET_PLANETS } = require('../actions');

const initialState = {
  data: [],
  isFetching: false,
};

const PlanetReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API:
      return { ...state, isFetching: true };
    case GET_PLANETS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default PlanetReducer;
