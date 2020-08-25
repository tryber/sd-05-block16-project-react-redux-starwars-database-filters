import { FILTER_NAME_PLANET } from '../actions/filterPlanetsName';

const STATE_INICIAL = {
  filterByName: {
    name: '',
  },
};

const filters = (state = STATE_INICIAL, action) => {
  // console.log('action reducer', action);
  switch (action.type) {
    case FILTER_NAME_PLANET:
      return {
        filterByName: {
          name: action.name,
        },
      };
    default:
      return state;
  }
};

export default filters;
