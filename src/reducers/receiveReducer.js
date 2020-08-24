import { RP_SUCESS, RP_FAILED, REQUEST_PLANETS, NAME } from '../actions/index';

const INITIAL_STATE = {
  filters: [
    {
      name: ',',
    },
  ],
  data: '',
  fetching: true,
};

const emptyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PLANETS:
      return {
        ...state,
        fetching: true,
      };
    case RP_SUCESS:
      return {
        ...state,
        fetching: false,
        data: action.data,
      };
    case RP_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    case NAME:
      return {
        ...state,
        filters: [
          {
            name: action.filters[0].name,
          },
        ],
      };
    default:
      return state;
  }
};

export default emptyReducer;
