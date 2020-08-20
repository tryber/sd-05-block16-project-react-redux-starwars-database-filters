import React from 'react';
import { connect } from 'react-redux';

class TableHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      payload: [],
      error,
    };
  }

  handleChange(event) {
    const { id, valeu } = event.target;
    this.setState({ [id]: valeu });
  }

  render() {
    return (
      <form>
        <label htmlFor="Procurar">Procurar: </label>
        <input id="Procurar" type="text" onChange={this.handleChange} />
      </form>
    )
  }
};

export default TableHeaders;
/* Estrutura retirada dos exercícios do bloco 16 */