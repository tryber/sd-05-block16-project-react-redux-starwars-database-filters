import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOneFilter } from '../reducers';

const FiltrosAtivos = () => {
  // https://react-redux.js.org/api/hooks
  const filterByNumericValues = useSelector((state) => (
    state.filters.filterByNumericValues));
  const dispatch = useDispatch();

  return (
    <div>
      {filterByNumericValues.map((f, index) => (
        <div key={f.column + 1} data-testid="filter">
          <span>
            {f.column}
            {' '}
          </span>
          <span>
            {f.comparison}
            {' '}
          </span>
          <span>{f.value}</span>
          <button type="button" onClick={() => dispatch(deleteOneFilter(index))}>X</button>
        </div>
      ))}
    </div>
  );
};

export default FiltrosAtivos;
