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
    const { planets, filterName } = this.props;
    if (!planets) { return <h1>Loading...</h1>; }
    let planetas = planets;
    if (filterName !== '') {
      planetas = planets.filter((planeta) => planeta.name.includes(filterName));
    }
    return (
      <div>
        <table className="table">
          <thead>
            <PlanetHeder />
          </thead>
          <tbody>
            {planetas.map((planet) => <Planet planet={planet} />)}
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
  filterName: state.filterNameReducer.nameInput,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentSW: () => dispatch(fechStarWars()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired,
  getCurrentSW: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
