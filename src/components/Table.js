import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import TBody from './TBody';

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
          <TBody />
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
