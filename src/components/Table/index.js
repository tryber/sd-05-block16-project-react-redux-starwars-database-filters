import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../../actions';

class Table extends React.Component {
  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    const { planets, loading, NF } = this.props;
    let tableHeaders = [];
    if (planets.length > 0) tableHeaders = Object.keys(planets[0]);
    if (!loading) return <h2>Loading</h2>;
    return (
      <table>
        <thead>
          <tr>
            {tableHeaders.map((each) => (
              <th key={each}>{each}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets
            .filter((data) =>
              data.name.toLowerCase().includes(NF.toLowerCase()),
            )
            .map((data) => (
              <tr key={data.terrain}>
                {tableHeaders.map((each) => (<td key={each}>{data[each]}</td>))}
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.APIreducer.data,
  loading: state.APIreducer.isFetching,
  NF: state.filters.filterByName.name,
});
const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
