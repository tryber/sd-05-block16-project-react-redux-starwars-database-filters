import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../reducers/filters';


class Dropfilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      value: '',
    };

    this.columnHandleChange = this.columnHandleChange.bind(this);
    this.comparisonHandleChange = this.comparisonHandleChange.bind(this);
    this.valueHandleChange = this.valueHandleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  }

  columnHandleChange(event) {
    this.setState({column: event.target.value});
  };

  comparisonHandleChange(event) {
    this.setState({comparison: event.target.value});
  };

  valueHandleChange(event) {
    this.setState({value: event.target.value});
  };

  // handleSubmit(values) {
  //   handleSubmit(this.state)
  //   console.log(this.state.column + this.state.comparison + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    // const { handleSubmit } = this.props;
    return (
      <form>
        <label> Selecione a coluna:
          <select data-testid="column-filter" value={this.state.column} onChange={this.columnHandleChange}>
            <option>selecione:</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation period</option>
            <option value="surface_water">surface water</option>
          </select>
        </label>
        <label> Selecione a comparação:
          <select data-testid="comparison-filter" value={this.state.comparison} onChange={this.comparisonHandleChange}>
            <option>selecione:</option>
            <option value="Maior que">Maior que</option>
            <option value="Menor que">Menor que</option>
            <option value="Igual a">Igual a</option>
          </select>
        </label>
        <input type="number" data-testid="value-filter" placeholder="insira o valor" onChange={this.valueHandleChange} />
        <button type="button" data-testid="button-filter" onClick={() => {
          this.props.handleSubmit(this.state)
          console.log(this.state)}
          }
          >Filtrar</button>
    </form>
      )
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (values) => dispatch(filterByNumericValues(values)),
});

export default connect(null, mapDispatchToProps)(Dropfilters);

// inspired by https://pt-br.reactjs.org/docs/forms.html dropdown content

//  <button type="submit" value="Enviar" data-testid="button-filter">Filtrar</button>
// form onSubmit={this.handleSubmit}
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coco'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Seu sabor favorito é: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Escolha seu sabor favorito:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="laranja">Laranja</option>
//             <option value="limao">Limão</option>
//             <option value="coco">Coco</option>
//             <option value="manga">Manga</option>
//           </select>
//         </label>
//         <input type="submit" value="Enviar" />
//       </form>
//     );
//   }
// }
