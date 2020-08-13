import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {test: 'api'};
  }

  componentDidMount() {
    this.setState({
      test: 'hello',
    });
  }

  render() {
    return (
    <div>
      StarWars Datatable with Filters <br></br>
      {this.state.test}
    </div>);
  }
}

export default Table;

