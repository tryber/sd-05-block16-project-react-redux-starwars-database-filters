import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchAPI } from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAPI();
  }

  render() {
    const { loading, data } = this.props;
    if (loading) return <div>Loading...</div>;
    return (
      <div className="App">
        <header className="App-header">
          {/* <Table /> */}
          <p>Teste</p>
          <p>{data[0].name}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
