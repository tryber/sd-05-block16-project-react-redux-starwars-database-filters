import React from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues, filterByName } from '../reducers/createActions';
import { store } from './FetchData';
// import { results } from '../testData';
function Table({
  filter,
  searchPlanet,
  isFetching,
  planets,
  values,
  onClick,
}) {
  function findPlanet(event) {
    const { target: { value } } = event;
    const planetFinded = planets.filter((planet) => {
      const { name } = planet;
      return (!value) ? true : name.includes(value);
    });
    // console.log(...planetFinded);
    filter(planetFinded, value);
    // return true;
  }
    return (
      isFetching ? <p>Loading...</p>
      : (
        <div className="body">
          <p>StarWars Datatable with Filters</p>
          {/* implementacao de formulario seguindo conteudo encontrado no site W3Schools */}
          <form>
            <div className="head">
              <div>
                <label>Procurar</label>
                <input data-testid='name-filter' name="filterByName" type="text"  onChange={(e) => findPlanet(e)} />
              </div>
              <div>
                <label htmlFor="select">Ordem</label>
                <select name="select" onChange={(e) => console.log(e)}>
                  <option value={'value'}>teste</option>
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
                    <input name="filter" type="dropdown" value={'value'} onChange={(e) => console.log(e)} />
                  </label>
                  <label>
                    <input name="comparasion" type="dropdown" value={'value'} onChange={(e) => console.log(e)} />
                  </label>
                </div>
                <label>
                  <input name="filterByNumericValues_1" type="number" value={'value'} onChange={(e) => console.log(e)} />
                </label>
                <button name="colun" type="button" onClick={onClick}>Filtrar</button>
              </div>
            </div>
          </form>
          <div clasName="table">
            <table className="border">
              <tr>
                <th>Planeta</th>
                <th>Clima</th>
                <th>Populacao</th>
                <th>Criado</th>
                <th>Diâmetro</th>
                <th>Editado</th>
                <th>Gravidade</th>
                <th>Período Orbital</th>
                <th>Periodo rotacional</th>
                <th>Superfice molhada</th>
                <th>Superfice terrena</th>
                <th>Rota URL</th>
                <th>Films</th>
              </tr>
              <tbody>
                {
                planets.map((planet, index) => (
                  <tr key={index}>
                    <td>{planet.name}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.population}</td>
                    <td>{planet.created}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.edited}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.url}</td>
                    <td>
                      {planet.films.map((fiml, i) => (
                        <li key={i}>{fiml}</li>
                      ))}
                    </td>
                  </tr>
                ))
                }
              </tbody>
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
