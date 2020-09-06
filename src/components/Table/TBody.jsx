import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableBody from '../TableBody';
// anderson godoy
import filterSort from '../../services/FilterSort';

function TBody(props) {
  const { allPlanets, loading, order, sort } = props;
  const planetsFiltered = filterSort(allPlanets, order, sort);

  return (
    <tbody>
      {loading === false
        ? planetsFiltered.map((infoPlaneta) => (
          <TableBody
            key={Math.floor(Math.random() * 0x100000)}
            data={infoPlaneta}
          />
          ))
        : null}
    </tbody>
  );
}

const mapStateToProps = (state) => ({
  loading: state.planetR.isFetching,
  order: state.filters.order.column,
  sort: state.filters.order.sort,
});

TBody.propTypes = {
  loading: PropTypes.bool.isRequired,
  sort: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  allPlanets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TBody);
