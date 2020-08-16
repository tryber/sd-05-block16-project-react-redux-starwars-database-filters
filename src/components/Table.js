import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAsyncFetch } from '../reducers';
import Thead from './THead';
import allFilteredFunc from '../functions';

class Table extends Component {
  componentDidMount() {
    const { handleAsync } = this.props;

    handleAsync();
  }

  render() {
    const {filteredName, isfetching, data, filterByNumericValues,
    } = this.props;
    return (
      <div>
        <table>
          <Thead />
          {!isfetching &&
            allFilteredFunc(data, filteredName, filterByNumericValues).map(
              (planet) => (
                <tbody key={planet.name}>
                  <tr>
                    <td>{planet.name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.population}</td>
                    <td>{planet.films}</td>
                    <td>{planet.created}</td>
                    <td>{planet.edited}</td>
                    <td>{planet.url}</td>
                  </tr>
                </tbody>
              ),
            )}
        </table>
        {isfetching && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleAsync: (e) => dispatch(handleAsyncFetch(e)),
});

const mapStateToProps = (state) => ({
  isfetching: state.requestReducer.isfetching,
  data: state.requestReducer.data,
  filteredName: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

Table.propTypes = {
  filteredName: PropTypes.string.isRequired,
  isfetching: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAsync: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
