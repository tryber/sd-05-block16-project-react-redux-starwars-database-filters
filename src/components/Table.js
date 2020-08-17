import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {

  render() {
    return (
      <div>StarWars Datatable with Filters</div>
    );
  }
}

export default connect(null)(Table);
