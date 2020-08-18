import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class TBody extends React.Component {
  render() {
    const { data, name, filterByNum } = this.props;
    let dataFilter;
    dataFilter = data.filter((planet) => (name === '' ? true : planet.name.toLowerCase().includes(name.toLowerCase())));
    filterByNum.forEach((obj) => {
      switch (obj.comparison) {
        case 'maior que':
          dataFilter = dataFilter.filter((planet) => Number(planet[obj.column]) > obj.value);
          break;
        case 'menor que':
          dataFilter = dataFilter.filter((planet) => Number(planet[obj.column]) < obj.value);
          break;
        case 'igual a':
          dataFilter = dataFilter.filter((planet) => (planet[obj.column]) === obj.value);
          break;
        default:
          return dataFilter;
      }
      return dataFilter;
    });
    return (
      <tbody>
        {dataFilter.map((planet) => (
          <tr key={planet.name}>
            {Object.entries(planet)
              .filter((element) => element[0] !== 'residents')
              .map((element) => <td key={element[1]}>{element[1]}</td>)}
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.fetchReducer.data,
  name: state.filters.filterByName.name,
  filterByNum: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps)(TBody);

TBody.propTypes = {
  data: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
  name: propTypes.string.isRequired,
  filterByNum: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
};
