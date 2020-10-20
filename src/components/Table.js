import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../action';
import THead from './THead';
import TBody from './TBody';
import SearchBar from './SearchBar';

class Table extends Component {

  componentDidMount() {
    const { chamaApi } = this.props;
    chamaApi();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching) return <h1>LOADING</h1>;
    return (
      <div>
        <SearchBar />
        <table>
          <thead>
            <THead />
          </thead>
          <TBody />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.apiReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  chamaApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  chamaApi: PropTypes.func.isRequired,
};
