import React from 'react';
import { connect } from 'react-redux';
import propTypes, { object } from 'prop-types';
import { filterByNumericValues, filterByName } from '../reducers/createActions';
import SelectColumn from './SelectColumn';
import SelectOrder from './SelectOrder';
import SelectComparison from './SelectComparison';
import Button from './Button';
import Header from './HeaderTable';
import RadioSort from './RadioSort';
import TableBody from './TableBody';

const InputProcurar = (findPlanet) => (
  <div>
    <label htmlFor="filterByName">Procurar</label>
    <input
      data-testid="name-filter"
      name="filterByName"
      type="text"
      onChange={(e) => findPlanet(e)}
    />
  </div>
);

const InputComparar = (console) => (
  <label htmlFor="filterByNumericValues_1">
    <input
      data-testid="value-filter"
      name="filterByNumericValues_1"
      type="number"
      onChange={() => console.log('Table')}
    />
  </label>
);

function Table({
  data,
  filter,
  isFetching,
  planets,
  // values,
  // filterByNumericValues,
}) {
  function findPlanet(event) {
    const { target: { value } } = event;
    const planetFinded = planets.filter((planet) => {
      const { name } = planet;
      return (!value) ? true : name.includes(value);
    });
    filter(planetFinded, value);
  }

  return (
    isFetching ? <div className="loading">Loading...</div>
      : (
        <div className="body">
          <p>StarWars Datatable with Filters</p>
          {/* implementacao de formulario seguindo conteudo encontrado no site W3Schools */}
          <form>
            <div className="head">
              {InputProcurar(findPlanet)}
              <SelectOrder data={data} />
              <RadioSort value="ASD" />
              <RadioSort value="DESC" />
              <Button data="column-sort-button" />
              <SelectColumn />
              <SelectComparison />
              {InputComparar(console)}
              <Button data="button-filter" />
            </div>
          </form>
          <div className="table">
            <table className="border">
              <thead>
                <Header />
              </thead>
              <TableBody />
            </table>
          </div>
        </div>
      )
  );
}

// implementacoes de funcoes relacionado ao store baseado no conteudo
//  e exercicios da Trybe do bloco de redux.

const mapStateToProps = (state) => {
  const { filterReducer: { filters: { filterByName: { name } } } } = state;
  const { fetchReducer: { data } } = state;
  return {
    name,
    isFetching: state.fetchReducer.isFetching,
    planets: (name) ? data.filter((one) => one.name.includes(name)) : data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  filter: (findedPlanet, str) => dispatch(filterByName(findedPlanet, str)),
  filterByNumericValues: (numericFilter) => dispatch(filterByNumericValues(numericFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.defaultProps = {
  data: undefined,
};

Table.propTypes = {
  data: propTypes.arrayOf(object),
  filter: propTypes.func.isRequired,
  isFetching: propTypes.bool.isRequired,
  planets: propTypes.arrayOf(object).isRequired,
};

// validacao de propTypes seguindo exemplos do conteudo do course.
// duvidas tiradas na validacao da chave 'data:' junto ao PR no repositorio do Felipe Vieira
