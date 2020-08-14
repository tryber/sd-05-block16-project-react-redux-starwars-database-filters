import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleFetch } from '../reducers';
import HeaderTable from './HeaderTable';
import propTypes from 'prop-types';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { test: 'HelloWorld' };
  }

  componentDidMount() {
    const { handleFetch } = this.props;
    handleFetch();
  }

  render() {
    const { isfetching, data, filterByName } = this.props;
    return (
      <div>
        {isfetching && <h1>Loading...</h1>}
        {!data && <h2>Error fetching data!</h2>}
        <table>
          <HeaderTable />
          {!isfetching && (data.filter((planets)=> planets.name.includes(filterByName)))
          .map((planet) => (
            <tbody key={planet.name}>
              <tr>
                <td >{planet.name}</td>
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
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleFetch: (e) => dispatch(handleFetch(e)),
});

const mapStateToProps = (state) => ({
  isfetching: state.fetchReducer.isfetching,
  data: state.fetchReducer.data,
  filterByName: state.filters.filters.filterByName.name,
  });

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  isfetching: propTypes.bool.isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
  handleFetch: PropTypes.func.isRequired,
  filterByName: PropTypes.string.isRequired
};

// Disscussed and did some pair programing with Paulo D'Andrea on this code
