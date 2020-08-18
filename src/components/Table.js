import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import TBody from './TBody';
import FilterBar from './FilterBar';

class Table extends React.Component {
  render() {
    const { data, loading } = this.props;
    if (loading) return <h2>Loading...</h2>;
    return (
      <div>
        <h2>StarWars Datatable with Filters</h2>
        <div>
          <FilterBar />
        </div>
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((title) => (
                title === 'residents' ? false : <th key={title}>{title}</th>))}
            </tr>
          </thead>
          <TBody />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.fetchReducer.loading,
  data: state.fetchReducer.data,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  loading: propTypes.bool.isRequired,
  data: propTypes.arrayOf(propTypes.Object).isRequired,
};
