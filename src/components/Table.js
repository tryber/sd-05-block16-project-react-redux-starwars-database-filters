import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { thunkRequest } from '../actions';

class Table extends Component {
  componentDidMount() {
    this.props.thunkRequest();
  }

  render() {
    return (
      <div>
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  thunkRequest: () => dispatch(thunkRequest()),
});

export default connect(null, mapDispatchToProps)(Table);
