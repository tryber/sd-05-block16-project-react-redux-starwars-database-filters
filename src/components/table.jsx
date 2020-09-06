import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';
import Head from './cabecalho';
import Body from './body';

class Table extends React.Component {
  /* componendDidMount é uma função executada uma vez só.
impedindo o fetchApi de ser executado mais de uma vez. */
  componentDidMount() {
    this.props.fetchApi();
  }
  /* Head criado para renderizar cabeçalho economizando linhas
dentro do render por causa do cc */
  /* Body criado para renderizar os dados da tabela.  */
  render() {
    return (
      <table>
        <Head />
        <Body />
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  planetas: state.reducerApi.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
