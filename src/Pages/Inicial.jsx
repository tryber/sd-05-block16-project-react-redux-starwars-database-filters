import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabela from '../components/Tabela';
import { fetcherThunk, filter } from '../actions/dataAction';
import Loading from '../components/Loading';
import InputFilter from '../components/InputFilter';
import NumericFilters from '../components/NumericFilters';

class Inicial extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { planetas, filter: { name }, erro, isFetching, filtrar } = this.props;
    let planetasFiltrados = [...planetas];

    const removeUnknown = (arrOriginal, column) => {
      //Função encontrada no stack Overflow e refatorada com o conteúdo que estamos usando no momento.
      // link: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
      const array = [...arrOriginal];
      let index = 0;
      while (index < array.length) {
        const item = array[index];
        if (item[column] === 'unknown') {
          array.splice(index, 1);
        } else {
          index += 1;
        }
      }
      return array;
    }

    if (name !== '' && !isFetching) {
      planetasFiltrados = planetasFiltrados.filter((planeta) => (planeta.name.includes(name)));
    };

    if (filtrar.length > 0 && !isFetching) {
      filtrar.forEach(({ value, comparison, column }) => {
        if (comparison === 'maior que') {
          planetasFiltrados = removeUnknown(planetasFiltrados, column);
          planetasFiltrados = planetasFiltrados.filter((planeta) => {
            return (parseInt(planeta[column]) > parseInt(value));
          });
        }
        if (comparison === 'menor que') {
          planetasFiltrados = removeUnknown(planetasFiltrados, column);
          planetasFiltrados = planetasFiltrados.filter((planeta) => {
            return (parseInt(planeta[column]) < parseInt(value));
          });
        }
        if (comparison === 'igual a') {
          planetasFiltrados = removeUnknown(planetasFiltrados, column);
          planetasFiltrados = planetasFiltrados.filter((planeta) => {
            return (planeta[column] === value);
          });
        }
      }
      )
    }

    if (erro !== '') {
      return (
        <div>
          DEU RUIM, FI!!
        </div>
      );
    }

    return (
      <div>
        <InputFilter />
        <NumericFilters />
        <Tabela planetas={planetasFiltrados} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(fetcherThunk()),
});

const mapStateToProps = (state) => {
  return {
  planetas: state.filters.planetas,
  isFetching: state.filters.isFetching,
  erro: state.filters.erro,
  filter: state.filters.filterByName,
  filtrar: state.filters.filterByNumericValues,
}};

Inicial.propTypes = {
  onLoad: PropTypes.func.isRequired,
  planetas: PropTypes.instanceOf(Array).isRequired,
  isFetching: PropTypes.bool.isRequired,
  erro: PropTypes.string.isRequired,
  filter: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicial);
