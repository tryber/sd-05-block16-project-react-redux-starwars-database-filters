import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isOrdem } from '../actions';

class OrderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colunas: [
        '',
        'Name',
        'Rotation_Period',
        'Orbital_Period',
        'Diameter',
        'Climate',
        'Gravity',
        'Terrain',
        'Surface_Water',
        'Population',
      ],
      selectColumn: 'Name',
      sobeOuDesce: 'ASC',
    };
  }

  render() {
    const { chave, ordenar } = this.props;
    const { colunas, selectColumn, sobeOuDesce } = this.state;
    return (
      <div>
        {chave}
        <div>
          <select
            data-testid="column-sort"
            onChange={(event) =>
              this.setState({ selectColumn: event.target.value })
            }
          >
            {colunas.map((value) => (
              <option key={value} value={value.toLowerCase()}>
                {value}
              </option>
            ))}
          </select>
          <input
            data-testid="column-sort-input"
            type="radio"
            name="ordem"
            value="ASC"
            onChange={(event) => this.setState({ sobeOuDesce: event.target.value })}
          />
          <label>ASC</label>
          <input
            data-testid="column-sort-input"
            type="radio"
            name="ordem"
            value="DESC"
            onChange={(event) => this.setState({ sobeOuDesce: event.target.value })}
          />
          <label>DESC</label>
          <button
            data-testid="column-sort-button"
            onClick={() => ordenar(true, sobeOuDesce, selectColumn)}
          >
            CLIQUE AQUI
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  ordenar: (a, b, c) => dispatch(isOrdem(a, b, c)),
});

export default connect(null, mapDispatchToProps)(OrderButton);
