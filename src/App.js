import React from 'react';
import './App.css';
import fetchData from './actions';
import Table from './components/Table';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Table />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(null, mapDispatchToProps)(App);
