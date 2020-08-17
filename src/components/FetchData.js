import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import { requestData, getResults, getError } from '../reducers/createActions';

function fetchData() {
  return (dispatch) => {
    dispatch(requestData());
    return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then(
        (obj) => dispatch(getResults(obj.results)),
        (error) => dispatch(getError(error)),
      );
  };
}

export const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchData());
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

// store.subscribe(() => console.log(store.getState()));

export default connect(null, mapDispatchToProps)(fetchData);
