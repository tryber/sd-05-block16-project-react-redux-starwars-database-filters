import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { planets } = this.props.planetReducer;
    console.log('reducer', this.props.planetReducer)

    let planetas = [];
    // GODOY
    if (planets.length > 0) planetas = Object.keys(planets[0]);

    console.log('planetasaasa', planetas)
    return (
      <table>
        <thead>
          <tr>
            {planetas.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((info) => (
            <tr key={(((1+Math.random())*0x10000)|0).toString(16).substring(1)}>
              {planetas.map((data) => (
                <td key={(((1+Math.random())*0x10000)|0).toString(16).substring(1)}>{info[data]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planetReducer: {
    loading: state.planetReducer.isFetching,
    planets: state.planetReducer.planets,
  },
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: (e) => dispatch(fetchActionPlanets(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
