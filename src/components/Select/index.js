import React from 'react';
import { connect } from 'react-redux';
import { querySelector } from '../../actions';

class Select extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      column: '',
      comparison: '',
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }
  
  render() {
    const {column, comparison, value} = this.state;
    const { filteredNumbers } = this.props
    const options = [ 'selecione', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water' ];
    const optionsValues = [ 'selecione', 'maior que', 'menor que', 'igual a' ];
    return (
      <div>
        <select data-testid="column-filter" name='column' onChange={this.handleChange}>
          {options.map((option) => 
            <option key={option} value={option}>{option}</option>
          )}
        </select>
        <select data-testid='comparison-filter' name='comparison' onChange={this.handleChange}>
          {optionsValues.map((values) =>
          <option key={values} value={values}>{values}</option>
          )}
        </select>
        <input type="number" data-testid='value-filter' name='value' onChange={this.handleChange} />
        <button type='button' data-testid='button-filter' onClick={() => filteredNumbers({column, comparison, value})}>Buscar</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  filteredNumbers : (e) => dispatch(querySelector(e))
})

export default connect(null, mapDispatchToProps)(Select);