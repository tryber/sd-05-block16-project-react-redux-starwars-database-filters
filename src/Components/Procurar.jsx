import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { updateFilter, selectionFilter, replaceFilters } from '../Actions/actions';
import '../App.css';

const basicOptionsSelect1 = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const optionsSelect2 = ['maior que', 'menor que', 'igual a'];

function EntrySeach(props) {
  return <div className="flex-me column-me">
        <label htmlFor="look">Procurar</label>
        <input name="look" type="text" data-testid="name-filter" onChange={props.handlerChange} />
      </div>
}
function Procurar(props) {
  const handlerChange = (event) => {
    props.updateFilter(event.target.value);
  };

  let optionsSelect1 = basicOptionsSelect1;
  props.usedFilters.forEach((e) => {
    optionsSelect1 = optionsSelect1.filter((o) => o !== e.column);
  });

  const values = {};
  return (
    <div className="flex-me">
      <EntrySeach handlerChange={handlerChange} />
      <div className="flex-me column-me">
        <label htmlFor="look">Procurar</label>
        <input name="look" type="text" data-testid="name-filter" onChange={handlerChange} />
      </div>
      <div className="flex-me column-me">
        <select data-testid="column-filter" onChange={(e) => (values.column = e.target.value)}>
          <option value="" disabled selected>
            Coluna
          </option>
          {optionsSelect1.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>
      <div className="flex-me column-me">
        <select data-testid="comparison-filter" onChange={(e) => (values.comparison = e.target.value)}>
          <option value="" disabled selected>
            Comparação
          </option>
          {optionsSelect2.map((e) => (
            <option value={e}>{e}</option>
          ))}
        </select>
      </div>
      <div className="flex-me column-me">
        <input type="number" name="" data-testid="value-filter" onChange={(e) => (values.value = e.target.value)} />
        <button data-testid="button-filter" onClick={() => props.selectionFilter(values)}>
          Add
        </button>
      </div>
      <div className="column-me">
        {props.usedFilters.map((e) => (
          <div data-testid="filter" key={`${e.column}d`}>
            <button key={`${e.column}b`} id={e.column} onClick={() => props.replaceFilters(props.usedFilters.filter((u) => u.column !== e.column))}>
              x
            </button>
            <label htmlFor={e.column} key={`${e.column}l`}>{`${e.column} ${e.comparison} ${e.value}`}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  usedFilters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (text) => dispatch(updateFilter(text)),
  selectionFilter: (enterFilter) => dispatch(selectionFilter(enterFilter)),
  replaceFilters: (payload) => dispatch(replaceFilters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Procurar);

Procurar.propTypes = {
  updateFilter: propTypes.func.isRequired,
  selectionFilter: propTypes.func.isRequired,
  usedFilters: propTypes.arrayOf(propTypes.instanceOf(Object)).isRequired,
};
