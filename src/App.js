import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.searchPlanet = this.searchPlanet.bind(this);
  }

  searchPlanet(e) {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    return (
      <div>
        Procurar:
        <input onChange={(e) => this.searchPlanet(e)} type="text" />
        <Table search={this.state.search} />
      </div>
    );
  }
}

export default App;
