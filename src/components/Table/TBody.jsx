import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableBody from '../TableBody';

function TBody(props) {
  const { allPlanets, loading } = props;
  return (
    <tbody>
      {loading === false
        ? allPlanets.map((infoPlaneta) => (
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
});

TBody.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(TBody);
