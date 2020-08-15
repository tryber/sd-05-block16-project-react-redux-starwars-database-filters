import React from 'react';
import fetchData from '../actions';
import { connect } from 'react-redux';

class Table extends React.Component {
  // componentDidMount() {
  //   this.props.fetchData();
  // };

  render() {
    const { loading, planets } = this.props;
    // console.log(planets)
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
    return (
      <div>
        {loading && <p>Loading</p>}
        {!loading && planets &&
          <table>
            {
              <thead>
                <tr>
                  {tableHeader.map((item, index) => <th key={index}>{item}</th>)}
                </tr>
              </thead>
            }
            {
              <tbody>
                {planets.map((planet, index) =>
                  <tr key={index}>
                    {tableHeader.map((item, i) => <td key={i}>{planet[item]}</td>)}
                  </tr>
                )}
              </tbody>
            }
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
