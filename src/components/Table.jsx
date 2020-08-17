import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStarWars } from '../actions/index';
import TableBody from './TableBody';

class Table extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Climate</th>
              <th>Terrain</th>
              <th>Diameter</th>
              <th>Gravity</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Population</th>
              <th>Surface Water</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>url</th>
            </tr>
          </thead>
          <TableBody />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.starWars.data,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchStarWars()),
});

Table.propTypes = {
  getPlanets: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
