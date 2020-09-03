import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { filterByName } from '../../actions';

const FilterPlanet = (props) => {
  <input
    data-testid="name-filter"
    type="text"
    onChange={(e) => props.seekPlanet(e.target.value)}
  />;
};

const mapDispatchToProps = (dispatch) => ({
  seekPlanet(filter) {
    const action = filterByName(filter);
    dispatch(action);
  },
});

FilterPlanet.propTypes = {
  seekPlanet: Proptypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterPlanet);
