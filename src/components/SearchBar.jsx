import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilterByName, changeFilterByNumeric } from './actions/actionsFilter';
import { Select, TextInput, Button } from 'react-materialize'
import './Table11.css'
import { fetchPlanets } from './actions/actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectColumn = this.handleSelectColumn.bind(this);
    this.handleSelectComparison = this.handleSelectComparison.bind(this);
    this.handleNumericValue = this.handleNumericValue.bind(this);
    this.submitToStore = this.submitToStore.bind(this);
    this.selectParameter = this.selectParameter.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  selectParameter() {
    return (
      <div className="input-field">

      <Select
        data-testid="column-filter"
        onChange={this.handleSelectColumn}
        className="white-text"
        options={{
          classes: "white-text"
        }}
        >
        <option>select</option>
        <option value="population" id="population">population</option>
        <option value="orbital_period"id="orbital_period">orbital_period</option>
        <option value="diameter" id="diameter">diameter</option>
        <option value="rotation_period" id="rotation_period">rotation_period</option>
        <option value="surface_water" id="surface_water">surface_water</option>
      </Select>
        
      </div>
    );
  }

  filterForm() {
    const { value } = this.state;
    return (
      <div className="filter-form">
        {this.selectParameter()}
        <Select data-testid="comparison-filter" onChange={this.handleSelectComparison} className="white-text">
          <option className="white-text">select</option>
          <option className="white-text" value="maior que">maior que</option>
          <option className="white-text" value="menor que">menor que</option>
          <option className="white-text" value="igual a">igual a</option>
        </Select>
        <TextInput
          className="white-text"
          type="number"
          data-testid="value-filter"
          placeholder="number"
          label="Valor"
          onChange={this.handleNumericValue}
          value={value}
          />
        {/* <input
          type="number"
          data-testid="value-filter"
          value={value}
          onChange={this.handleNumericValue}
        /> */}
        {/* <button
          type="button"
          data-testid="button-filter"
          onClick={this.submitToStore}
        >
          Acionar Filtro
        </button> */}
        <Button
          node="button"
          style={{
            marginRight: '5px'
          }}
          waves="light"
          onClick={this.submitToStore}
        >
          Acionar Filtro
        </Button>
      </div>
    );
  }

  handleSelectColumn(event) {
    this.setState({
      column: event.target.value,
    });
  }

  handleSelectComparison(event) {
    this.setState({
      comparison: event.target.value,
    });
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    });
    this.props.changeFilterByName(event.target.value);
  }

  handleNumericValue(event) {
    this.setState({ value: event.target.value });
  }

  submitToStore(event) {
    event.preventDefault()
    const { column, comparison, value } = this.state;
    this.props.changeFilterByNumeric(column, comparison, value);
  }

  render() {
    const { inputText } = this.state;
    return (
        <form className="form" >
          <div className="search-container">
            <div>
              <TextInput
              className="white-text"
                placeholder="Name"
                label="Procurar"
                data-testid="name-filter"
                onChange={this.handleChange}
                value={inputText}
                />
            </div>
             {/*  <label htmlFor="name-filter">Procurar</label>
              <input
                placeholder="Name"
                onChange={this.handleChange}
                value={inputText}
                data-testid="name-filter"
                className="validate"
                id="name-filter"
                /> */}
              {this.filterForm()}
          </div>
        </form>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterByName: (nameInput) => dispatch(changeFilterByName(nameInput)),
  changeFilterByNumeric: (column, comparison, value) => (
    dispatch(changeFilterByNumeric(column, comparison, value))
  ),
  fetchData: () => dispatch(fetchPlanets())
});

/* const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchPlanets()),
}); */

SearchBar.propTypes = {
  changeFilterByName: PropTypes.instanceOf(Object).isRequired,
  changeFilterByNumeric: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
