import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanets } from '../actions';
import Loading from '../components/Loading';

function mapArray(array) {
  return array.map((arr) => (
    <tr key={arr.name}>
      <td>{arr.name}</td>
      <td>{arr.rotation_period}</td>
      <td>{arr.orbital_period}</td>
      <td>{arr.diameter}</td>
      <td>{arr.climate}</td>
      <td>{arr.gravity}</td>
      <td>{arr.terrain}</td>
      <td>{arr.surface_water}</td>
      <td>{arr.population}</td>
      <td>{arr.residents}</td>
      <td>{arr.films}</td>
      <td>{arr.created}</td>
      <td>{arr.edited}</td>
      <td>{arr.url}</td>
    </tr>
  ));
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchP } = this.props;
    fetchP();
  }

  render() {
    if (this.props.fetching) return <Loading />;
    const { planets } = this.props;
    // const { search } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>rotation period</th>
            <th>orbital period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface water</th>
            <th>population</th>
            <th>residents</th>
            <th>films</th>
            <th>created</th>
            <th>edited</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>{mapArray(planets)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.emptyReducer.data,
  fetching: state.emptyReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchP: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  fetchP: PropTypes.func.isRequired,
  fetching: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
