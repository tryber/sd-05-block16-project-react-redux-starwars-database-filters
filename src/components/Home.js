import React, { Component } from 'react';
import Filter from './Filter';
import Compare from './Compare';
import Table from './Table';
import Remove from './Remove';

class Home extends Component {
  render() {
    return (
      <div>
        <Filter />
        <Compare />
        <Remove />
        <Table />
      </div>
    );
  }
}

export default Home;
