import React from 'react';
import { connect } from 'react-redux';
import { fetchPlanets } from '../../actions';

class Table extends React.Component {
  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    const { planets, loading, NF } = this.props;
    const tableHeaders = [];
    for (let att in planets[0]) {
      if (att !== 'residents') tableHeaders.push(att);
    }
    {
      if (!loading) return <h2>Loading</h2>;
    }
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
              data.name.toLowerCase().includes(NF.toLowerCase())
            )
            .map((data, index) => (
              <tr key={'row' + index}>
                {tableHeaders.map((each, index) => (
                  <td key={index}>{data[each]}</td>
                ))}
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
  getInfo: (e) => dispatch(fetchPlanets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
