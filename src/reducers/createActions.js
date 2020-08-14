import {
  FETCH_DATA, GET_RESULTS, GET_ERROR, FILTER_BY_NUMERIC_VALUES, FILTER_BY_NAME,
} from './actions';

export const requestData = () => ({
  type: FETCH_DATA,
});

export const getResults = (data) => ({
  // console.log(data);
  type: GET_RESULTS,
  payload: data,
});

export const getError = (error) => ({
  type: GET_ERROR,
  payload: error,
});

export const filterByName = ({ e }) => {
  const { value } = e.target;
  return {
    type: FILTER_BY_NAME,
    payload: {
      value,
      // onChange,
    },
  };
};

export const filterByNumericValues = (e) => ({
  type: FILTER_BY_NUMERIC_VALUES,
  payload: e.target.value,
});
