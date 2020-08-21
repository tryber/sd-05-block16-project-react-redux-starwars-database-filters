import React from 'react';
import { connect } from 'react-redux';
import ReduxThunk from '../redux/actions/action';

class TableHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      planetSearched: '',
    };
    this.submitName = this.submitName.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
      planetSearched: '',
    })
  }

  submitName(event) {
    event.preventDefault();
    const { inputText } = this.state;
    const { ImportReduxThunk } = this.props;
    this.setState({
      inputText: '',
      planetSearched: inputText,
    });
    ImportReduxThunk(inputText);
  }

  render() {
    const { inputText } = this.state;
    return (
      <form>
        <label htmlFor="Procurar">Procurar: </label>
        <input id="Procurar" value={inputText} type="text" onChange={this.handleChange} />
      </form>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  ImportReduxThunk: e => dispatch(ReduxThunk(e)),
});

export default connect(null, mapDispatchToProps)(TableHeaders);
/* Estrutura retirada dos exercícios do bloco 16 */
