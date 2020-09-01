import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'
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
    const { loading, planets } = this.props.planetReducer;
    if( loading ) return <h1>Carregando</h1>;
    let planetas = [];
    // GODOY
    if (planets.length > 0) planetas = Object.keys(planets[0]);

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
          {planets.map((orbit) => (
            <tr key={uuid()}>
              {planetas.map((data) => (
                <td key={uuid()}>{orbit[data]}</td>
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


Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  planetReducer: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPlanets: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  planetReducer: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
