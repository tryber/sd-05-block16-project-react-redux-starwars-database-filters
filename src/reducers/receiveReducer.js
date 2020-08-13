import { REQUEST } from '../actions/index'
const INITIAL_STATE = {
  name: '',
  rotation_period:'',
  orbital_period: '',
  diameter: '', 
  climate: '',
  gravity: '', 
  terrain: '',
  surface_water: '',
  population: '',
  residents: '',
  films: '',
  created: '',
  edited: '',
  url: '',
};

function emptyReducer(state =  INITIAL_STATE, action) {
  switch(action.type){
    case REQUEST:
      return{
        ...state,
      }
      default:
        return state;
  }
}

export default emptyReducer;
