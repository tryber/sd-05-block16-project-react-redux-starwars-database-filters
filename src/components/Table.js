import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchActionPlanets } from '../redux/actions';

class Table extends Component {

  componentDidMount() {
    const { getPlanets } = this.props;
    this.timer = setTimeout(getPlanets, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {

    const { planetReducer } = this.props;
    const { isFetching, planets } = planetReducer;
    console.log("Planets", planets);

    return (
      <div>
        <h1>{isFetching}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planetReducer: {
    isFetching: state.planetReducer.isFetching,
    planets: state.planetReducer.planets,
  },
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchActionPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
