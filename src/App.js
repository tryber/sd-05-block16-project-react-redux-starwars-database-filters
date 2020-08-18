import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Table from './Components/Table';
import Procurar from './Components/Procurar';
import { getAPI } from './Actions/actions';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getAPI();
  }
  render() {
    return (
      <div>
        <header>
          <Procurar />
        </header>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAPI: () => dispatch(getAPI()),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  getAPI: propTypes.func.isRequired,
};
