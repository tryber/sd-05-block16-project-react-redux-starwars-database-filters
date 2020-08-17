import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fechStarWars } from '../actions';
import PlanetHeder from './planetHeder';
import Planet from './planet';
import '../App.css';

class Table extends Component {

  componentDidMount() {
    const { getCurrentSW } = this.props;
    getCurrentSW();
  }

  render() {
    if (!this.props.planets) { return <h1>Loading...</h1>; }
    return (
      <div>
        <table className="table">
          <thead>
            <PlanetHeder />
          </thead>
          <tbody>
            {this.props.planets.map((planet) => <Planet planet={planet} />)}
          </tbody>
        </table>
        {this.props.planets.isFetching && 'Loading...'}
        {!this.props.planets.isFetching && this.props.planets.error}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.starWaresReducer.planets,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentSW: () => dispatch(fechStarWars()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrentSW: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
