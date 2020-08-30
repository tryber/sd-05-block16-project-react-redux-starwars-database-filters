import React from 'react';
import { connect } from 'react-redux';
import Tabela from '../components/Tabela';
import { fetcherThunk } from '../actions/dataAction';
import Loading from '../components/Loading';
import InputFilter from '../components/InputFilter';

class Inicial extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { planetas, filter: { name }, erro, isFetching } = this.props;
    if (!isFetching && name === '') {
      return (
        <div>
          <InputFilter />
          <Tabela planetas={planetas} />
        </div>
      );
    }
    if(!isFetching && name !== '') {
      const PlanetasFiltrados = planetas.filter((planeta) => (planeta.name.includes(name)))
      return (
        <div>
          <InputFilter />
          <Tabela planetas={PlanetasFiltrados} />
        </div>
      );
    }
    if (erro !== '') {
      return(
        <div>
          DEU RUIM, FI!!
        </div>
      );
    }
    return (<Loading />);
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(fetcherThunk()),
});



const mapStateToProps = (state) => ({
  planetas: state.filters.planetas,
  isFetching: state.filters.isFetching,
  erro: state.filters.erro,
  filter: state.filters.filterByName,
});

export default connect(mapStateToProps, mapDispatchToProps)(Inicial);
