import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import Home from './pages/Home';

const App = (props) => {
  const { planets } = props;
  console.log(planets);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

const mapStateToProps = (state) => ({
  planets: state.reducerPlanets,
});

export default connect(mapStateToProps)(App);
