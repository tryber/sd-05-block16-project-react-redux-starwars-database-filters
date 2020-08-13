import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStarWarsPlanets } from '../actions/fetchPlanetsApi';

class Table extends Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
    
  }

  render() {
    const { error, isFetching, data } = this.props;
    return (
      <div>
        {data.map(planet => {
          return <div>{planet.name}</div>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.getPlanets.error,
  isFetching: state.getPlanets.isFetching,
  data: state.getPlanets.data,
})

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchStarWarsPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
