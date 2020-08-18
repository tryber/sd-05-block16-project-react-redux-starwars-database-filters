import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFilter } from '../reducers/filters';


class FilterDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { HelloWorld: 'HelloWorld' };
  }
  render() {
    // const { handleChangeName } = this.props;
    const { filterByNumericValues, removeThisFilter } = this.props;
    if (filterByNumericValues.length > 0) {
      return (
        <div>
          <h2>Filtros ativos:</h2>
          {filterByNumericValues.map((filtro) => (
            <div key={filtro.column} data-testid="filter">
              <ul>
                <li>{filtro.column}</li>
                <li>{filtro.comparison}</li>
                <li>{filtro.value}</li>
              </ul>
              <button type="button" onClick={() => removeThisFilter(filtro.column)}>X</button>
            </div>
          ))}
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = { removeThisFilter: removeFilter };

const mapStateToProps = (state) => ({
  filterByNumericValues: state.filters.filterByNumericValues,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDisplay);

FilterDisplay.propTypes = {
  filterByNumericValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeThisFilter: PropTypes.func.isRequired,
};
