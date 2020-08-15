import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchData from '../actions';

const tableHeader = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.body = this.body.bind(this);
  }

  body() {
    const { planets } = this.props;
    return (
      <tbody>
        {planets.map((planet) =>
          <tr key={planet.name}>
            {
              tableHeader.map((item) =>
                <td key={item}>
                  {planet[item]}
                </td>)
            }
          </tr>,
        )}
      </tbody>
    );
  }

  render() {
    const { loading, planets } = this.props;
    return (
      <div>
        {loading && <p>Loading</p>}
        {!loading && planets &&
          <table>
            {
              <thead>
                <tr>
                  {tableHeader.map((item) => <th key={item}>{item}</th>)}
                </tr>
              </thead>
            }
            {this.body()}
          </table>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.fetchReducer.loading,
  planets: state.fetchReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  loading: PropTypes.bool.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
