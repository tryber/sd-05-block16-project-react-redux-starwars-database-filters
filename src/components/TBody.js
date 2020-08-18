import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class TBody extends React.Component {
  render() {
    const { data, name } = this.props;
    let dataFilter;
    if (name === '') {
      dataFilter = data;
    } else {
      dataFilter = data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    }
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
});

export default connect(mapStateToProps)(TBody);

TBody.propTypes = {
  data: propTypes.arrayOf(propTypes.Object).isRequired,
  name: propTypes.string.isRequired,
};
