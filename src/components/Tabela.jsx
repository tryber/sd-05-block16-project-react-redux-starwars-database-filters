import React from 'react';
import { connect } from 'react-redux';
import { fetcherThunk } from '../actions/dataAction';
import store from '../store/index';

class Tabela extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { planetas, isFetching, erro } = this.props;
  if (isFetching === false) return (planetas.map(planeta => <p>{planeta.name}</p>))
    return <div>bla</div>
  }
}

const mapStateToProps = (state) => ({
  planetas: state.dataReducer.planetas,
  isFetching: state.dataReducer.isFetching,
  erro: state.dataReducer.erro,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(fetcherThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
