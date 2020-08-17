// Referencia:
// https://github.com/tryber/sd-05-live-lectures/blob/react-redux-pt2/iss/src/services/issAPI.js

const api = () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
                  .then((response) => response.json())
                  .then((data) => data)
                  .catch((error) => error);

export default api;
