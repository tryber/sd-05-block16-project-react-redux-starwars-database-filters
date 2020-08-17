import { requestData, getResults, getError } from '../reducers/createActions';

export default function fetchData() {
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


// store.dispatch(fetchData());
// const mapDispatchToProps = (dispatch) => ({
//   fetchData: () => dispatch(fetchData()),// });

// export const store = createStore(reducer, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState()));

// export default connect(null, mapDispatchToProps)(fetchData);
