import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class THead extends Component {
  render() {
    const { header } = this.props;
    return (
      <tr>{Object.keys(header[0]).map((cabecalho) =>
      (cabecalho === 'residents' ? false : <th key={cabecalho}>{cabecalho}</th>))}</tr>
    );
  }
}

const mapStateToProps = (state) => ({
  header: state.apiReducer.data.results,
});

export default connect(mapStateToProps)(THead);

THead.propTypes = {
  header: PropTypes.func.isRequired,
};
