import React from 'react';

class Busca extends React.Component {
  render() {
    return (
      <div>
        <h1>Star Wars Filter planet</h1>
        <form action="">
          <label htmlFor="Pesq">pesquisar</label>
          <input type="text" id="Pesq" />
          <div>
            <select name="" data-testid='column-filter'>
              <option value="">escolha uma categoria</option>
              <option value="population">population</option>
              <option value="orbital_period">orbital_period</option>
              <option value="diameter">diameter</option>
              <option value="rotation_period">rotation_period</option>
              <option value="surface_water">surface_water</option>

            </select>
          </div>
        </form>
      </div>
    )
  }
}

export default Busca;