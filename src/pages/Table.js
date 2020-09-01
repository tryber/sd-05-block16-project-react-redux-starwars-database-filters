import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSWAPI } from '../actions/index';
import TableBody from '../components/TableBody';
import TableHeader from '../components/TableHeader';
import FilterByName from '../components/FilterByName';
import FilterByNumber from '../components/FilterByNumber';

class Table extends Component {
  componentDidMount() {
    const { dispatchData } = this.props;
    dispatchData();
  }

  render() {
    const { loading } = this.props;
    if (loading) return <h1>LOADING</h1>;
    return (
      <section>
        <FilterByName />
        <FilterByNumber />
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.reducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchData: (e) => dispatch(fetchSWAPI(e)),
});


Table.propTypes = {
  dispatchData: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Table);
