import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TableHead from './TableHead';
import TableBody from './TableBody';

import './style.css';

const Table = ({ fetching }) => {
  if (fetching) return <div>Loading...</div>;
  return (
    <table>
      <TableHead />
      <TableBody />
    </table>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.API.fetching,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = { fetching: PropTypes.bool.isRequired };
