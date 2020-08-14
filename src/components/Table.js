import React from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues, filterByName } from '../reducers/createActions';
// import { results } from '../testData';

function Table({
  isFetching,
  planet,
  value,
  onClick,
}) {
  return (
    isFetching ? <p>Loading...</p>
      : (
        <div>
          <p>StarWars Datatable with Filters</p>
          {/* implementacao de formulario seguindo conteudo encontrado no site W3Schools */}
          <form>
            <div className="head">
              <div>
                <label>Procurar</label>
                <input name="filterByName" type="text" value={value} onChange={(e) => console.log(e.target.value)} />
              </div>
              <div>
                <label htmlFor="select">Ordem</label>
                <select name="select" onChange={(e) => console.log(e)}>
                  <option value={value}>teste</option>
                </select>
                <input id="asc" name="filterByOrder" type="radio" value="asc" onChange={(e) => console.log(e.target.value)} />
                <label htmlFor="asc">ASC</label>
                <input id="dsc" name="filterByOrder" type="radio" value="dsc" onChange={(e) => console.log(e.target.value)} />
                <label htmlFor="dsc">DSC</label>
                <button name="order" type="button" onClick={(e) => console.log(e.target)}>Filtrar</button>
              </div>
              <div>
                <div>
                  <label>
                    <input name="filter" type="dropdown" value={value} onChange={(e) => console.log(e)} />
                  </label>
                  <label>
                    <input name="comparasion" type="dropdown" value={value} onChange={(e) => console.log(e)} />
                  </label>
                </div>
                <label>
                  <input name="filterByNumericValues_1" type="number" value={value} onChange={(e) => console.log(e)} />
                </label>
                <button name="colun" type="button" onClick={onClick}>Filtrar</button>
              </div>
            </div>
          </form>
          <table>
            <thead>
              <tr>
                <th>Planeta</th>
                <th>Clima</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {
              planet.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.climate}</td>
                  <td>{p.population}</td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
      )
  );
}
// implementacoes de funcoes relacionado ao store baseado no conteudo
//  e exercicios da Trybe do bloco de redux.
const mapStateToProps = (state) => (
  {
    isFetching: state.fetchReducer.isFetching,
    planet: state.fetchReducer.data,
  });

const mapDispatchToProps = (state, dispatch) => ({
  filterReducer: {
    filters: {
      filterByName: { name: () => dispatch(state.filterReducer.filterByName()) },
    },
    filterByNumericValues: () => dispatch(state.filterReducer.filterByNumericValues()),
  },
}
);

export default connect(mapStateToProps, mapDispatchToProps)(Table);
