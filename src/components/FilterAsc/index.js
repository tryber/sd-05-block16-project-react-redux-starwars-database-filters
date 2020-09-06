import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortChangeASC, nameChangeASC, sortAction } from '../../actions';

class FilterAsc extends Component {
  render() {
    const {
      sortFilter,
      selectedName,
      selectedRadio,
      sortASC,
      columnASC,
    } = this.props;
    const COLUNAS = [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'films',
      'created',
      'edited',
      'url',
    ];

    return (
      <div className="order">
        <p>Ordem</p>
        <select
          name="columnValue"
          onChange={(e) => selectedName(e.target.value)}
          id="order"
          data-testid="column-sort"
        >
          {COLUNAS.map((item) => (
            <option key={item}>{item}</option>
          ))}
          ;
        </select>
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            value="ASC"
            data-testid="column-sort-input"
            onClick={(e) => selectedRadio(e.target.value)}
          />
          ASC
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            id="DESC"
            value="DESC"
            data-testid="column-sort-input"
            onClick={(e) => selectedRadio(e.target.value)}
          />
          DSC
        </label>
        <button
          data-testid="column-sort-button"
          onClick={() => sortFilter(sortASC, columnASC)}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sortASC: state.filterASC.sort,
  columnASC: state.filterASC.column,
});

const mapDispatchToProps = (dispatch) => ({
  selectedRadio: (sort) => dispatch(sortChangeASC(sort)),
  selectedName: (name) => dispatch(nameChangeASC(name)),
  sortFilter: (sort, column) => dispatch(sortAction(sort, column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterAsc);
