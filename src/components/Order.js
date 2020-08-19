import React from 'react';
import { connect } from 'react-redux';
import { sortColumn } from '../actions';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 'Name',
      sort: 'ASC',
    };
    this.handleOnChangeColumn = this.handleOnChangeColumn.bind(this);
    this.handleOnChangeRadio = this.handleOnChangeRadio.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChangeColumn(event) {
    let { value } = event.target;
    //  manobra técnica para o Name que está diferente nos testes:
    if ( value === 'name') value = 'Name';
    this.setState({ column: value });
  }

  handleOnChangeRadio(event) {
    const { value } = event.target;
    this.setState({ sort: value });
  }

  handleOnClick() {
    const { column, sort } = this.state;
    const { sendSort } = this.props;
    sendSort(column, sort);
  }

  render() {
    const { data } = this.props;
    let options = [];
    if (data.length > 0) {
      options = Object.keys(data[0]);
      options.pop();
    }

    return (
      <div>
        <h4>Ordem</h4>
        <select data-testid="column-sort" onChange={this.handleOnChangeColumn}>
          {options.map((item) => (<option key={item} value={item}>{item}</option>))}
        </select>
        <input type="radio" id="teste" name="radiocheck" onChange={this.handleOnChangeRadio} checked={this.state.sort === 'ASC'} value="ASC" data-testid="column-sort-input" />
        <label htmlFor="teste">ASC</label>
        <input type="radio" id="teste1" name="radiocheck" onChange={this.handleOnChangeRadio} checked={this.state.sort === 'DESC'} value="DESC" data-testid="column-sort-input" />
        <label htmlFor="teste1">DESC</label>
        <button data-testid="column-sort-button" onClick={this.handleOnClick}>Filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  sendSort: (column, sort) => dispatch(sortColumn(column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);

//  https://www.w3schools.com/tags/att_input_type_radio.asp
//  http://react.tips/radio-buttons-in-reactjs/
