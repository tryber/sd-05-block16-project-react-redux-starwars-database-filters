import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPlanets } from '../../actions';
import filtering from '../../services/filtering';

class Table extends React.Component {
  componentDidMount() {
    this.props.getInfo();
  }

  render() {
    const { planets, loading, NF, filters, columnOrder, nameOrder } = this.props;
    let tableHeaders = [];
    if (planets.length > 0) tableHeaders = Object.keys(planets[0]);
    tableHeaders.splice(tableHeaders.indexOf('residents'), 1);
    const planetas = filtering(planets, NF, filters, columnOrder, nameOrder);
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
          {planetas.map((data) => (
            <tr key={data.terrain}>
              {tableHeaders.map((each) => (
                <td key={each}>{data[each]}</td>
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
  filters: state.filters.filterByNumericValues,
  columnOrder: state.filters.order.column,
  nameOrder: state.filters.order.sort,
});
const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(fetchPlanets()),
});

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  NF: PropTypes.string.isRequired,
  getInfo: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnOrder: PropTypes.string.isRequired,
  nameOrder: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
