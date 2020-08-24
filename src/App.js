import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Table from './components/Table';
import { filterName } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Procurar:
        <input
          data-testid="name-filter"
          onChange={(e) => this.props.f_Name(e.target.value)}
          type="text"
        />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  f_Name: (name) => dispatch(filterName(name)),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  f_Name: PropTypes.func.isRequired,
};
