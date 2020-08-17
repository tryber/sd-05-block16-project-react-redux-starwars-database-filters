import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './App.css';
import { fetchAPI } from './actions';
import Table from './components/Table';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAPI();
  }

  render() {
    const { loading } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.fetchReducer.loading,
  data: state.fetchReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPI()),
});

App.propTypes = {
  loading: propTypes.bool.isRequired,
  fetchAPI: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
