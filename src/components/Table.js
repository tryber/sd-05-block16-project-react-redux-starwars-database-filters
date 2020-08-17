import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>StarWars Datatable with Filters</h2>
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                key === 'residents' ? false : <th>{key}</th>))}
            </tr>
          </thead>
          <tbody>
            {data.map((result) => (
              <tr>
                <td>{result.name}</td>
                <td>{result.rotation_period}</td>
                <td>{result.orbital_period}</td>
                <td>{result.diameter}</td>
                <td>{result.climate}</td>
                <td>{result.gravity}</td>
                <td>{result.terrain}</td>
                <td>{result.surface_water}</td>
                <td>{result.population}</td>
                <td>{result.films}</td>
                <td>{result.created}</td>
                <td>{result.edited}</td>
                <td>{result.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.fetchReducer.data,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  data: propTypes.arrayOf(propTypes.Object).isRequired,
};
