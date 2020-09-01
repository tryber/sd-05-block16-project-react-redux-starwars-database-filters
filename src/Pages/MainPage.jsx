import React, { Component } from 'react';
import Header from '../Components/Header';
import PlanetsTable from '../Components/PlanetsTable';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>Star Wars Project</h1>
        <Header />
        <PlanetsTable />
      </div>
    );
  }
}
