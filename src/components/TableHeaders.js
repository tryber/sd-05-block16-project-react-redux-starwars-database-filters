import React from 'react';
import { connect } from 'react-redux';

class TableHeaders extends React.Component {
  render() {
    return();
  }
};

const mapDispatchToProps = (dispatch) => ({
  ImportReduxThunk: e => dispatch(ReduxThunk(e)),
});

export default connect(null, mapDispatchToProps)(TableHeaders);
/* Estrutura retirada dos exercícios do bloco 16 */
