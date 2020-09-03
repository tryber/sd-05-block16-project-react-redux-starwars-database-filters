import { ADD_FILTER, RESET_FILTER_TO_SEND, TOGGLE_RENDER } from '../Actions';

const INITIAL_STATE = {
  filterToSend: {
    column: '',
    comparison: '',
    value: '',
  },
  filtersOptions: {
    numeric: [
      // { value: '', text: 'Coluna', noRender: false },
      { value: 'population', text: 'population', noRender: false },
      { value: 'orbital_period', text: 'orbital_period', noRender: false },
      { value: 'diameter', text: 'diameter', noRender: false },
      { value: 'rotation_period', text: 'rotation_period', noRender: false },
      { value: 'surface_water', text: 'surface_water', noRender: false },
    ],
    comparison: [
      { value: 'maior que', text: 'maior que' },
      { value: 'menor que', text: 'menor que' },
      { value: 'igual a', text: 'igual a' },
    ],
  },
  sorterParam: {
    column: '',
    sort: '',
  },
};

function toggleRender(optionArray, value) {
  const newState = [];
  optionArray.forEach((option) => {
    if (option.value === value && value !== '') {
      newState.push({ ...option, noRender: !option.noRender });
    } else {
      newState.push(option);
    }
  });
  return newState;
}

const newStateToggled = (state, payload) => ({
  ...state,
  filtersOptions: {
    ...state.filtersOptions,
    numeric: [...toggleRender(state.filtersOptions.numeric, payload)],
  },
});

const temporaryFilter = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filterToSend: {
          ...state.filterToSend,
          ...payload,
        },
      };
    case RESET_FILTER_TO_SEND:
      return {
        ...state,
        filterToSend: {
          ...INITIAL_STATE.filterToSend,
        },
      };
    case TOGGLE_RENDER:
      return newStateToggled(state, payload);
    default:
      return state;
  }
};

export default temporaryFilter;
