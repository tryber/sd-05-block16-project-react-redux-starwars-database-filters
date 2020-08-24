import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { thunkRequest } from '../actions';

class Table extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
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

Table.propTypes = {
  thunkRequest: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Table);
