import React from 'react';

class buttonFilter extends React.Component {
  render() {
    return (
      <div>
        <button data-testid="button-filter" onClick={() => this.props.pegarNumero(this.state)}>
          Acionar
        </button>
        <div>
          {this.props.filtros.map((filtro) => (
            <div data-testid="filter">
              <button onClick={this.props.removeClick} id={filtro}>
                X
              </button>
              {filtro}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default buttonFilter;