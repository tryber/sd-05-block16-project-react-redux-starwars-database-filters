import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByNumericValues } from '../actions';

class Compare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property: '',
      // properties: [
      //   '',
      //   'diameter',
      //   'orbital_period',
      //   'population',
      //   'rotation_period',
      //   'surface_water',
      // ],
      parameter: '',
      // parameters: [
      //   '',
      //   'maior que',
      //   'menor que',
      //   'igual a',
      // ],
      value: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  onChange(e, key) {
    this.setState({ [key]: e.target.value });
  }

  onClick() {
    const { property, parameter, value } = this.state;
    // const { filterByNumericValues } = this.props;
    this.props.filterByNumericValues(property, parameter, value);
    this.setState({ property: '', parameter: '', value: '' });
  }

  // updateProperties(){
  //   const { comparisonParams } = this.props;
  //     const listProps = comparisonParams.map(({ column }) => column);
  //     this.setState({ properties: properties.filter((param) => !listProps.includes(param)) });
  // }

  getAttribute() {
    const attributes = this.setProperty();
    // const attributes = this.state.properties;
    return (
      <select
        data-testid="column-filter"
        value={this.state.property}
        onChange={(e) => this.onChange(e, 'property')}
      >
        {attributes.map((attribute) => (
          <option key={attribute} value={attribute}>
            {attribute}
          </option>
        ))}
      </select>

    );
  }

  getCompare() {
    // const operators = this.state.parameters;
    const operators = [
      '',
      'maior que',
      'menor que',
      'igual a',
    ];
    return (
      <select
        data-testid="comparison-filter"
        value={this.state.parameter}
        onChange={(e) => this.onChange(e, 'parameter')}
      >
        {operators.map((operator) => (
          <option key={operator} value={operator}>
            {operator}
          </option>
        ))}
      </select>
    );
  }

  getValue() {
    return (
      <input
        type="number"
        data-testid="value-filter"
        value={this.state.value}
        onChange={(e) => this.onChange(e, 'value')}
      />
    );
  }

  setProperty() {
    const { comparisonParams } = this.props;
    const properties = [
      '',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const propUpdated = comparisonParams.map(({ column }) => column);
    return properties.filter((property) => !propUpdated.includes(property));
    // return properties;
  }

  render() {
    return (
      <div>
        <h3>Compare</h3>
        {this.getAttribute()}
        {this.getCompare()}
        {this.getValue()}
        <button data-testid="button-filter" onClick={this.onClick}>
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comparisonParams: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filterByNumericValues: (property, parameter, value) => (
    dispatch(filterByNumericValues(property, parameter, value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);

Compare.propTypes = {
  filterByNumericValues: PropTypes.func.isRequired,
  comparisonParams: PropTypes.arrayOf(PropTypes.object).isRequired,
};
